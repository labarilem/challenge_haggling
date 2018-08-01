# intro

The purpose of negotiation is to reach an agreement, and in particular, agreement in the presence of conflicting goals and preferences.
If negotiation were about non conflicting argumtens, then it would be solely an optimization problem.

## structure of negotiations

Befoe building an automated negoiatior, it would be better to unserstand how humans negotiate. Negotation consists of 11 activities:

1. Conflict: The negotiation begins with the recognition that there is some conflict that needs resolution, and by determining the extent and scope of this conflict, including the issues in contention.

2. Partecipants to the negotiations are identified.

3. Gathering private informations (e.g. a car buyer checks public car prices)

4. Opponent analysis

5. Negotiation protocol selection 

6. Exchange of offers and feedbacks on offers

7. Argumentation (e.g. justifications, promises, etc.)

8. Learning

9.Dynamic strategy selection.

10.Impasse resolution. At this stage, alternative action may be required to enable an agreement to be reached (e.g., bringing in a thirdparty mediator).

11.Renegotiation. This step allows for refinements to be made to an agreed deal.

## params of automat negotiation

A negotiation is defined vy 4 main components: *negotiation set*, *negotiation protocol *,  *strategies* and *number of agents*.

### neg set

Is the space of possibile proposals that agents can make.
In a multi.issue negotation, this space grows exponentially: suppose you have n issues to agree on with a yes or no. Then you have 2^n different proposals in the negotiation set. In this case it's computationally hard to find the optimal proposal.

### neg protocol

The negotiation protocol constitutes the set of rules that define how negotiation will proceed. Incldued rules:

- which offers are valid
- when a dal can be considered struck
- when a deal can be considered failed and which action to take in this case

### neg strategies

A negotiation strategy for a participant defines the proposals that this participant will make over time. Usually its private even tho the choices resulting from teh strat are public.

### numebr of agents

There a re 3 possibilities:

- one.to.one negots (bilateral)
- many-to-one negots
- may to many negots

## a strategic approach

Let's assume tat negotia is a strategi activity. This means that participants act as best they can to realise their preferences, assuming that their counterparts in turn will act as best they can to realise their preferences.

With this view of negot, Game theory can help us.

Game theory is usually interpreted in one of two ways: as a descriptive theory (provides prediction models) or as a normative theory (provides best action to take at a given stage).

Binmore concluded that there are situations in which game theory can work as a predictive theory for human decision making, but that for it to do so, the scenario to which game theory is being applied must satisfy the following properties:

- The scenario should be sufficiently simple that the decision makers can understand it. That is, they need to be able to understand easily the choices available to themselves and others, the incentives of others (i.e., the preferences they are trying to realise), and the consequences of various choices.

- The incentives driving the decision makers should be sufficiently large that they really do affect the decisions made by participants.

- The participants must be able to repeat the interaction, observe the outcomes, and learn from them: if a player interacts just once, then they don’t have sufficient opportunity to learn. Over time, Binmore (2007) suggests, the choices of players will converge towards game-theoretic solution concepts.

Automated negotiations focuses more on the normative theory application. In this scenario, we dont need to consider complxity added by humans (emotional instaiblity, etc.).







-----------------------------------------------------------------------
