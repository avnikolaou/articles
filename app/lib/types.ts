import { v4 as uuidv4 } from 'uuid';

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
}

export const MOCK_ARTICLES: Article[] = [
  {
    id: uuidv4(),
    title: 'From Writing Code to Judging Code',
    slug: 'from-writing-code-to-judging-code',
    excerpt:
      'How AI has reshaped the junior-to-senior path, shifting the value of engineering from writing code to judging it.',
    content: `I have wanted to write technical articles for a long time. This is my first attempt, so be gentle. All the code regarding the site was AI generated. No words in this article were AI-generated.

## The Collapse of the Old Skill Ladder

Let's state the obvious here. The hiring process has changed with the introduction of AI in our own little world. Back in the P.A.I (Prior to AI) era, to add a Front-End developer to a team, there was a straightforward process. An introductory discussion with HR, a task that involved creating a "simple" app that most likely consumed an API and displayed Pokémon or movies in a screen, a discussion with a senior member about the project presented, maybe chat about the approach, etc.

This was meant to show that a developer has a basic understanding of how a library like React works (yes, it's a library, let's accept it and move on), show some syntax understanding and give the chance to the interviewer to understand if the person that wrote this small app, would be a good fit for the team.

## The Shift from Writing Code to Judging Code

Well, those days are gone. What was described above, that could take hours or even days, depending on experience, can now be AI generated in minutes. So, to the big question. How are you going to make that judgment now? How can you tell that the person behind a GitHub repo, is the right one?

Junior vs Senior distinction, has reshaped and for the near future, it's not going to return to what it was. Seniors are now way more to the "judging code" section, than "writing code". In a real-world scenario, the junior can now ask Claude or ChatGPT to generate a custom React hook, connect it to an API and even write the tests. The code will often be compiled on the first attempt. What AI cannot tell them is whether that hook belongs in the component tree, whether it creates an unnecessary abstraction, or whether the pattern will survive six months of product evolution. It cannot evaluate the tradeoffs, detect subtle architectural flaws and align decisions with long-term product goals. The senior role shifts closer to reviewer than author, with a larger share of time spent validating and guiding. The proportion of time spent reviewing, validating and guiding increases dramatically. He is now a system designer and not just a higher level implementor, a risk manager and not just a problem solver.

## The "AI-Boosted Junior" Problem

This creates a problem of its own. High output, low comprehension. The traditional path of writing code, watching it fail, debugging it, and eventually understanding why it failed is becoming less common. And it is becoming way less common because our little helper (yes, whatever AI thingy you prefer right now) will most likely hit that sweet spot of "it is working".

Can a developer become senior without "suffering" through debugging? I genuinely don't know the answer. But I suspect that many of the skills we associate with seniority are forged precisely during those frustrating hours spent chasing bugs, understanding systems, and discovering why something works instead of merely making it work.

In my opinion, we may be creating developers who can ship features extremely fast while understanding less of the implementation than previous generations. Understanding the implementation—not just shipping the feature—is what traditionally enabled the transition from junior to senior. The first step of explaining something difficult is to understand it and for me, and I assume for most developers, writing code is better than reading code at this scenario.

And I'll hit you with another one. Does the AI accelerate learning, or does it bypass it? We have all been through the process of reading the documentation of a library, to add a rather "simple" but not that clear feature. The best mentors rarely solved problems for me. They helped me discover solutions myself. AI optimizes for answers. Great mentors optimize understanding.

What AI is capable of today challenges the old ways. Today, you ask questions and you get answers. Good or bad, it's still answers. The journey from junior to senior has not disappeared, but it has changed. AI can generate solutions faster than developers can generate understanding.

## Redefining "Seniority"

Welcome to the modern, newly discovered world. You now have a "simpler" day routine… And I would say that knowing when not to use AI, is the starting point of that routine. Reading code and spotting generated patterns vs anti-patterns must be hard. Scalability was a major discussion back in the days. How are you going to design systems that can survive scale and constantly change at the same time? And don't get me started on translating those vague product ideas into robust architecture. It is now clear that seniority has shifted from production to discernment.

And what about mentorship? My favorite subject. Traditionally, you used to be that person to a junior, the one that I admired in my early days. The one that would point you to the way and not just cough up the correct answer. The one that would serve that junior the sweet nectar of discovery. The one to teach syntax patterns, debugging… You now must explain concepts that are not that easy to explain and to be understood. Can you be as good as an AI in that? So many tools out there that can do that…

## The Uncomfortable Question

Think of this. Juniors are now three times faster than they used to be, but seniors are only one and a half times faster, what will happen to the structure of the teams? How will the hiring process evolve in the upcoming years? What is your value at this moment?

Perhaps seniority is not becoming less valuable. Perhaps it is becoming harder to fake. As generating code becomes easier, understanding code becomes more important.

The distinction between junior and senior developers may not disappear in the AI era—it may simply move from implementation to judgment.`,
    category: 'AI & Careers',
    tags: ['ai', 'seniority', 'mentorship', 'engineering'],
    publishedAt: '2026-06-06',
    readTime: 7
  }
];
