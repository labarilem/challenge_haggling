'use strict'; /*jslint node:true*/

// Each turn decreases acceptance quota
// Each turn concedes the lowest valued item

// me is 0 if your turn is first, and 1 if your turn is second.

module.exports = class Agent {
  constructor(startingPlayer, counts, values, max_rounds, log) {

    this.startingPlayer = startingPlayer;
    this.counts = counts;
    this.values = values;
    this.max_rounds = max_rounds;
    this.rounds = max_rounds;
    this.log = log;

    this.total = 0;
    for (let i = 0; i < counts.length; i++) {
      this.total += counts[i] * values[i];
    }

    if (startingPlayer === 0) {
      // this script is first
      this.acceptanceQuotas = [70, 70, 70, 70, 70];
      this.concedeCounts = [0, 1, 2, 2, 3];
    } else {
      // this script is second
      this.acceptanceQuotas = [90, 90, 90, 90, 80];
      this.concedeCounts = [0, 1, 2, 2, 3];
    }



  }
  offer(proposedOffer) {
    this.log(`${this.rounds} rounds left`);
    this.rounds--;

    const roundNumber = this.max_rounds - this.rounds;
    const acceptanceQuota = this.acceptanceQuotas[roundNumber];
    const concedeCount = this.concedeCounts[roundNumber];

    if (proposedOffer) {
      let sum = 0;

      for (let i = 0; i < proposedOffer.length; i++) {
        sum += this.values[i] * proposedOffer[i];
      }


      if (sum >= this.total * acceptanceQuota / 10) {
        return;
      }
    }

    const offerToPropose = this.counts.slice();
    for (let i = 0; i < offerToPropose.length; i++) {
      if (!this.values[i]) {
        offerToPropose[i] = 0;
      }
    }

    const worstValues = this.values.map((v, index) => ({ id: index, val: v }))
      .sort(function (a, b) {
        return a.val - b.val;
      });
    let added = 0;

    for (let i = 0; i < worstValues.length; i++) {
      const worstValue = worstValues[i];
      if (worstValue.val > 0) {
        for (let j = 0; j < this.counts[worstValue.id]; j++) {
          if (added < this.concedeCounts[roundNumber]) {
            // adding an item to the offer
            added += 1;
            offerToPropose[worstValue.id] = offerToPropose[worstValue.id] - 1;
          } else {
            break;
          }
        }
      }
    }

    return offerToPropose;
  }
};
