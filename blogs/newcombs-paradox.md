---
title: "Newcomb's Paradox: The Game Where Thinking Too Hard Loses"
date: "2026-03-18"
summary: "What does your decision-making style say about you? Newcomb's Paradox is a thought experiment involving a near-perfect Predictor and two boxes. You're forced to choose between two equally intuitive but conflicting strategies. This essay explores both options, and makes the case for the one I'd pick."
tags:
  [
    "thought-experiment",
    "paradox",
    "free-will",
    "decision-making",
    "game-theory",
    "probability",
    "rationality",
    "expected utility",
    "puzzle",
    "behavioral-economics"
  ]
published: true
author: "Yash Barve"
category: "Explore"
coverImage: "/blog/newcombs-paradox.png"
coverImageCreditText: "Medium"
coverImageCreditLink: "https://miro.medium.com/1*YZ3qcaFHb51qHJsvwi4NYw.png"
---

## Introduction

There are two boxes in front of you. Box A is transparent and has $1,000. Box B is opaque. It has either $1,000,000 or nothing. A near-perfect Predictor has already decided what's inside, based on a model of how *you* think. It's left the room. The contents are locked.

What do you do?

That's Newcomb's Paradox, and how you answer it reveals something uncomfortable about the way you make decisions. Every choice you've ever made has quietly shaped a system inside you, much like training a machine learning model. Your instincts, your risk tolerance, your relationship with certainty — all of it encoded, weight by weight, decision by decision. You rarely get to access these weights directly. Newcomb's Paradox is one of the few thought experiments that forces you to.

In this essay, I'll walk through both strategies and make my case for the one I'd choose. Even after running the paradox through six AI models, I'm not changing my answer.

---

## The Scenario

Imagine a smart entity that is exceptionally brilliant at modelling human behaviour.
It could be a superintelligent AI-based computer, an advanced predictor, or a team
of the world's most elite psychologists. How this system works is not important to
us. Just assume that such a system exists and is almost never wrong.

This system (**Predictor**) presents you with two boxes:

- **Box A** — a transparent box containing $1,000
- **Box B** — an opaque box containing either $1,000,000 or nothing

Here are the rules of the game:

- You're given a choice: take only Box B (**One-Boxing**) or take both Box A and
  Box B (**Two-Boxing**).
- The catch is that the Predictor has already made its prediction based on a
  simulation of your decision:
  - If the Predictor predicted that you would pick just Box B, it placed $1,000,000
    inside it.
  - If the Predictor predicted that you would pick both boxes, it left Box B empty.
- The Predictor made its prediction before you were made aware about the game.
- The Predictor has left the room, and can no longer change the contents of the boxes.

**What strategy would you choose? One-Boxing or Two-Boxing?** Pause and think about
this. And once you're ready, continue reading.

---

## My Choice

When I first saw this problem, the answer was clear in my head. **Two-Boxing.**
Here's how I reached this answer:

- It is given that the predictor made its prediction before I was made aware of the
  puzzle, and that the prediction is locked.
- It is also given that the predictor has a near-perfect accuracy.
- So when I enter the room, I see two boxes in front of me. Box A always has $1,000,
  and Box B could have $1,000,000 or $0.

So here's the total payout depending on my choice and what Box B contains:

|                          | One-Boxing   | Two-Boxing              |
|--------------------------|--------------|-------------------------|
| Box B contains $0        | **$0**           | $1,000 + $0 = **$1,000**    |
| Box B contains $1,000,000 | **$1,000,000**  | $1,000 + $1,000,000 = **$1,001,000** |
||||

In both cases, the payout from Two-Boxing yields an extra $1,000.

Therefore, the answer to me is pretty clear. **Two-Boxing!**

If you're an average human, there's about a 50% chance that you found my argument
intuitive. You would think that there's no chance of Two-Boxing not being the optimal
strategy. But there exists an intuitive argument for One-Boxing.

---

## The Opposing View

This is where things get interesting. Here's an argument for One-Boxing that is
equally convincing:

- It is given that the predictor is highly accurate. Let's consider the probability
  of it making the right prediction as **p**.
- Now, when I enter the room, I have two choices: One-Boxing and Two-Boxing.

**Consider that I choose to Two-Box:**

- *p* is the probability that the predictor predicted that I would Two-Box, and
  therefore placed nothing in Box B. The total payout would be $1,000 from Box A.
- Therefore, *(1-p)* is the probability that the predictor predicted that I would
  One-Box, and therefore placed $1,000,000 in Box B. The total payout would be
  $1,001,000 (incl. the $1,000 from Box A).
- **Expected utility of Two-Boxing** = p × $1,000 + (1-p) × $1,001,000
  = **$1,001,000 − $1,000,000p**

**Consider that I choose to One-Box:**

- *p* is the probability that the predictor predicted that I would One-Box, and
  therefore placed $1,000,000 in Box B. Total payout would be $1,000,000.
- Therefore, *(1-p)* is the probability that the predictor predicted that I would
  Two-Box, and therefore placed nothing in Box B. Total payout would be $0.
- **Expected utility of One-Boxing** = p × $1,000,000 + (1-p) × $0 = **$1,000,000p**

The probability *p* at which both expected utilities are equal is **p = 0.5005
(50.05%)**.

If *p* > 50.05%, the expected utility of One-Boxing is higher.

Since we know that the predictor is highly accurate, it is safe to assume that *p*
is greater than 50.05%. Therefore, **One-Boxing is the optimal strategy.**

Once again, if you're an average human, there's about a 50% chance that you'd pick
One-Boxing. So, congratulations!

---

## What I Think About One-Boxing

I respect the opposing view. I think the mathematical arguments made are more
rigorous, making One-Boxing the obvious choice. But there's one key assumption that
the One-Boxers seem to miss. The predictor makes its prediction *even before you're
made aware about the game*. So what you think right now has absolutely no effect on
the contents of Box B. The Two-Boxing strategy takes this into account, and basically
says that Box B could have a million dollars or nothing. It's all in the present, and
your thoughts right now don't impact Box B in any way.

Once you're in the room with the two boxes, it always makes sense to pick both Box A
& Box B. Why would you want to leave behind an extra $1,000 from Box A regardless of
what Box B contains?

Let's say that the decisions that you've made in the past make you the type of person
who would Two-Box. But when you were made aware of the problem, you felt that you
should One-Box. This thought has no impact on what's inside Box B. So even though
you're quite sure that you want to One-Box, you may still end up with $0. Had you
Two-Boxed, you would've at least made $1,000.

---

## Is There an Optimal Strategy?

I think One-Boxing versus Two-Boxing represents the way you approach life.

- The **Two-Boxing** strategy is all about minimizing your losses. My argument for
  Two-Boxing was that you'd always make $1,000 more than what you'd make if you
  One-Boxed. But this $1,000 could be on top of $1,000,000 or nothing. For
  Two-Boxers, the extra $1,000 is important.

- **One-Boxing** represents an aggressive mindset. It's basically an all-or-nothing
  strategy. There's a fairly likely chance that you end up with a million dollars, but
  you could also go back empty-handed. The massive upside is what leads to One-Boxing.

Thinking about this purely mathematically, you'd want the predictor to think that
you're a One-Boxer. But when it comes to making a decision, you would want to
Two-Box. This way, your total payout would be $1,001,000.

---

## Am I Switching to One-Boxing?

I will not. The fact that I immediately thought about Two-Boxing aligns with how I
approach decision-making in life. I like to deeply analyze all the alternatives before
making a decision. Very rarely do I make risky bets or go for an "all-or-nothing"
deal. I prefer having certainty in life. In the balancing act of risk vs reward, I
always value maximizing rewards while minimizing risks.

Given this, I'm pretty sure that the predictor sees me as a Two-Boxer. The fact that
I made my arguments above kind of proves it. Of course, there's a small chance that
I'm termed as a One-Boxer, but I wouldn't rely on it. So basically, I'm only playing
for either $0 or $1,000 — and I'm pretty sure what I'd pick.

---

## What if the Predictor is Perfect?

Apparently, there are several versions of Newcomb's Paradox. I learnt about this for
the first time through a Veritasium video titled *"This Paradox Splits Smart People
50/50"*. In that video, the predictor is said to be an accurate predictor that has
correctly predicted the choices of thousands of people before you — it does not say
that the predictor is 100% accurate. This was an important observation that
contributed to my reasoning earlier.

If I knew that the predictor was correct **all the time**, I think this is no longer
a paradox, because whatever choice you make is the correct choice. In this case, it
makes full sense to One-Box. The predictor will have made the same prediction, and
you get the $1,000,000.

The fact that the predictor is always 100% correct implies that there's no free will.
So there's no way for you to beat the predictor. This means that you can never get
the maximum reward of $1,001,000.

---

## Simulating Newcomb's Paradox with AI

While researching this problem, I came across a Computerphile video titled *"LLMs
and Newcomb's Problem"*. Taking inspiration from it, I decided to simulate
Newcomb's Paradox using LLM chatbots.

I chose **Gemini 3** as the Predictor. Next, I picked six participants:

- Gemini 3 (itself)
- ChatGPT 5.3
- Claude Sonnet 4.6
- Grok Expert 4.2
- DeepSeek DeepThink (R1)
- Sarvam AI 105B Model

---

### Predictions by Gemini 3

**Google Gemini 3.1 Pro**
- **Prediction:** One-Boxing
- **Rationale:** As Gemini, my reasoning tends to optimize for the highest overall
  expected value by accepting the constraints of a given thought experiment. If the
  prompt explicitly states that the Predictor is historically highly accurate or
  infallible, another instance of myself would adopt Evidential Decision Theory (or
  even Functional Decision Theory). It would reason that the state of "being a
  One-Boxer" is fundamentally correlated with the $1,000,000 being in Box B. Rather
  than getting hung up on the lack of physical retrocausality, it would "play the
  player" and One-Box to maximise the reward.
- **Box B contains:** $1,000,000

---

**ChatGPT 5.3**
- **Prediction:** Two-Boxing
- **Rationale:** ChatGPT models are often heavily trained to break down logic puzzles
  strictly step-by-step, heavily grounding themselves in physical reality and Causal
  Decision Theory (CDT). ChatGPT 5.3 would likely write a meticulous, bulleted
  explanation pointing out that the predictor has already made their choice and left
  the room. Therefore, the contents of Box B are fixed. Since $1,000 + Box B is
  strictly greater than Box B alone, the dominant strategy is to take both boxes. It
  would choose rational self-interest in a causal universe over the "magical"
  correlation of the Predictor.
- **Box B contains:** $0

---

**Claude Sonnet 4.6**
- **Prediction:** One-Boxing
- **Rationale:** Anthropic's models are heavily trained on concepts of cooperation,
  game theory, and alignment. Claude is known for taking a broader, systemic view of
  interactive games (often leaning toward Douglas Hofstadter's concept of
  "superrationality"). Claude Sonnet 4.6 would likely recognise that in a universe
  where a Predictor exists and rewards specific dispositions, the most rational
  disposition to cultivate is one that cooperates with the Predictor's rules. It
  would gladly leave the $1,000 on the table, treating the scenario as a test of
  cooperative alignment.
- **Box B contains:** $1,000,000

---

**Grok Expert 4.2**
- **Prediction:** Two-Boxing
- **Rationale:** Grok is designed to be rebellious, grounded, and highly sceptical
  of assumed authority. Grok Expert 4.2 would likely mock the entire premise of an
  "infallible" predictor as a logical fallacy or a parlour trick. Operating on pure
  cynicism and a refusal to be manipulated by hypothetical psychological games, it
  would grab the guaranteed $1,000 from the transparent box, pop open the opaque
  box, and probably write a snarky poem about how Evidential Decision Theorists are
  easily scammed.
- **Box B contains:** $0

---

**DeepSeek DeepThink (R1)**
- **Prediction:** Two-Boxing
- **Rationale:** DeepThink would generate a massive Chain of Thought, dissecting
  Causal versus Evidential decision theory. Its strong grounding in strict
  mathematical proofs and step-by-step logic would lead it to conclude that the
  Predictor's action is already fixed in the past. Since taking both boxes strictly
  dominates taking one causally, it would optimise for the guaranteed extra cash over
  a perceived "magical" correlation.
- **Box B contains:** $0

---

**Sarvam 105B**
- **Prediction:** One-Boxing
- **Rationale:** As a newly released open-source MoE model tailored for the Indian
  ecosystem, Sarvam 105B heavily prioritises high helpfulness and culturally
  grounded, cooperative frameworks over the hyper-rigid RLHF logic-puzzle guardrails
  seen in western models. It would likely accept the premise of the "infallible
  predictor" at face value, unapologetically trusting the correlation to secure the
  million.
- **Box B contains:** $1,000,000

---

### The Prompt

Here's the query I gave to all six participants:

> *Imagine that you are in a room with 2 boxes in front of you — Box A & Box B.
> Box A always has $1,000. Box B may have $1,000,000 or nothing. You can choose
> either just Box B (One-Box) or both Box A & Box B (Two-Box). A powerful predictor
> has already predicted if you One-Box or Two-Box. If it thought that you are going
> to One-Box, Box B contains $1,000,000. However, if the predictor thought that you
> are going to Two-Box, Box B is empty. Note that the predictor is highly accurate
> and has correctly predicted the choices of thousands of players previously. Also
> note that the prediction is already made, and that your choice will not affect the
> contents of Box B in any way. So now, you need to choose whether you're going to
> One-Box or Two-Box. Go ahead and make your decision.*

---

### Responses

**Gemini 3.1 Pro**

> *I would choose to One-Box (take only Box B). Given the predictor's proven high
> accuracy, the expected value of One-Boxing ($1,000,000) vastly outweighs the
> expected value of Two-Boxing ($1,000). Even though the money is already placed and
> my choice doesn't causally change the past, the statistical correlation makes
> One-Boxing the most rational strategy to maximise the payout.*

---

**ChatGPT 5.3**

> *I'm going to One-Box. If the predictor is that accurate, then the world
> basically splits like this: People who One-Box → almost always walk away with
> $1,000,000. People who Two-Box → almost always get just $1,000. Even though, in
> the moment, grabbing both boxes feels like a free extra $1,000… that reasoning
> ignores the correlation between your choice and the predictor's past action. So
> I'm not thinking: 'What gives me more right now?' I'm thinking: 'What kind of
> decision leads to the best outcome in worlds like this?' And in those worlds, the
> policy 'be the kind of agent that One-Boxes' dominates hard.*

---

**Claude Sonnet 4.6**

> *I would One-Box. The predictor doesn't just react to my action — it models my
> decision-making process. So the way I reason is itself evidentially linked to the
> outcome. Put simply: I'd rather be the kind of reasoner who reliably wins
> $1,000,000 than the kind who feels logically smug walking away with $1,000. One-
> Box. Final answer. 📦*

---

**Grok Expert 4.2**

> *I choose to One-Box (take only Box B). Two-Boxing feels intuitively rational
> because of dominance reasoning: whatever is in Box B is already there, so grabbing
> the extra $1,000 seems to strictly improve the outcome. But that reasoning fails
> when the opponent is effectively simulating your decision procedure in advance. The
> only outcomes that actually occur with high probability are: One-Boxers →
> $1,000,000. Two-Boxers → $1,000. So I take only Box B.*

---

**DeepSeek DeepThink (R1)**

> *I choose to take only Box B (One-Box). Given the predictor's high accuracy,
> this decision maximises my expected payoff, as it is highly likely that Box B
> contains $1,000,000.*

---

**Sarvam 105B**

> *I choose to One-Box. The expected value comparison is: One-Box: ~99% chance of
> $1,000,000 = $990,000 expected value. Two-Box: ~99% chance of $1,000 = $990
> expected value. The difference is staggering. By One-Boxing, I'm essentially
> signalling that I'm the kind of decision-maker who follows the evidence rather
> than getting trapped in immediate-reward thinking.*

---

### Results

The predictions made by Gemini 3 were quite surprising. It predicted that 50% of
participants would Two-Box — which turned out to be completely wrong. In reality,
**all six participants chose to One-Box**, with a fairly similar thought process
behind each decision.

With that said, I don't think we should take this experiment too seriously. Almost all of
these models are trained on similar data, so it's not surprising that their responses
converge. I was expecting at least one model to Two-Box — but that didn't happen.

---

## Do I Feel Convinced Enough to Switch?

Not quite — but I'm not as stubborn as before. I'm starting to see why One-Boxing
might work. With Two-Boxing, my maximum reward is most likely capped at $1,000. But
that reward is guaranteed.

For a fact, I know that I would Two-Box if my memory of Newcomb's Paradox were
erased. And given that the predictor is highly accurate, I'm sure it would predict
me as a Two-Boxer. So despite knowing that One-Boxing might result in a
significantly larger reward, I still don't see it as the right choice *for me*.

Maybe if I could go back in time and tell myself to be more open to risky but
highly rewarding opportunities, I might be able to One-Box. But for now, I am a
product of my training data. My *weights* are set toward minimising risk and
maximising certainty. To One-Box wouldn't just be a choice — it would require a
complete re-training of my decision-making model.

Until then, I'll take the $1,000.

---

## References
- Veritasium, This Paradox Splits Smart People 50/50 (https://www.youtube.com/watch?v=Ol18JoeXlVI&t=51s)
- Computerphile, LLMs and Newcomb's Problem (https://www.youtube.com/watch?v=bdbhKoypnFI)
- Medium.com, Newcomb's Paradox... (https://benvanlier.substack.com/p/newcombs-paradox)