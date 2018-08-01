const axios = require("axios");
const chalk = require('chalk');
const crypto = require('crypto');

function printScriptStats(statsData, scriptId, descr) {
  const data = statsData[scriptId];
  console.log(chalk.blue("-------------------------------------------"));
  console.log(chalk.blue(descr + " (") + scriptId + chalk.blue(")"));
  const sessionsCount = data.all.sessions;
  console.log(chalk.green("Sessions count: ") + sessionsCount);
  const meanScore = data.all.score / data.all.sessions;
  console.log(chalk.green("Mean score: ") + meanScore + chalk.green("/10"));
  const agreementsPerc = 100 * data.all.agreements / data.all.sessions
  console.log(chalk.green("Agreements: ") + agreementsPerc + chalk.green(("%")));
}

const arenaStatsUrl = process.argv[2];
console.log(chalk.yellow("Arena stats URL: ") + arenaStatsUrl);

axios.get(arenaStatsUrl)
  .then(function (response) {
    //  {
    //   "all": {
    //       "sessions": 520,
    //       "agreements": 360,
    //       "score": 2651
    //   },
    //   "2018-06-27": {
    //       "sessions": 2,
    //       "agreements": 2,
    //       "score": 16
    //   },
    //   "2018-06-28": {
    //       "sessions": 518,
    //       "agreements": 358,
    //       "score": 2635
    //   }
    // }

    console.log(chalk.yellow("Competitors count: ") + Object.getOwnPropertyNames(response.data).length);

    const myScriptHash = crypto.createHash('md5').update(process.argv[3]).digest('hex');
    printScriptStats(response.data, myScriptHash, "Your script");

    const overThreshold = Object.getOwnPropertyNames(response.data).filter(pName => {
      return response.data[pName].all.sessions > 500;
    });
    const sortedByScore = overThreshold.sort((a, b) => {
      const scoreA = response.data[a].all.score / response.data[a].all.sessions;
      const scoreB = response.data[b].all.score / response.data[b].all.sessions;
      if (scoreA > scoreB) {
        return -1;
      }
      if (scoreA < scoreB) {
        return 1;
      }
      return 0;
    });

    printScriptStats(response.data, sortedByScore[0], "Best script");
    printScriptStats(response.data, sortedByScore[1], "Second best script");
    printScriptStats(response.data, sortedByScore[2], "Third best script");
  })
  .catch(function (error) {
    console.log(error);
  });