"use client";

import { Quote } from "lucide-react";

const quotes = [
  {
    quote: "A person is made by their belief. As they believe, so they become.",
    author: "Bhagavad Gita",
    source: "Ch. 17, Verse 3",
  },
  {
    quote:
      "You have the right to perform your actions, but you are not entitled to the fruits of the actions.",
    author: "Bhagavad Gita",
    source: "Ch. 2, Verse 47",
  },
  {
    quote:
      "Let a man lift himself by his own self alone, and let him not lower himself.",
    author: "Bhagavad Gita",
    source: "Ch. 6, Verse 5",
  },
  {
    quote:
      "It is better to live your own destiny imperfectly than to live an imitation of somebody else's life with perfection.",
    author: "Bhagavad Gita",
    source: "Ch. 3, Verse 35",
  },
  {
    quote:
      "One who is free from attachment, fear, and anger is called a sage of steady mind.",
    author: "Bhagavad Gita",
    source: "Ch. 2, Verse 56",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    source: "",
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein",
    source: "",
  },
  {
    quote:
      "Success is not final, failure is not fatal — it is the courage to continue that counts.",
    author: "Winston Churchill",
    source: "",
  },
  {
    quote: "Genius is 1% inspiration and 99% perspiration.",
    author: "Thomas Edison",
    source: "",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act but a habit.",
    author: "Aristotle",
    source: "",
  },
  {
    quote:
      "Dream is not what you see in sleep; it is the thing which does not let you sleep.",
    author: "A.P.J. Abdul Kalam",
    source: "",
  },
  {
    quote: "With self-discipline, almost anything is possible.",
    author: "Theodore Roosevelt",
    source: "",
  },
  {
    quote: "The secret of success is to do the common things uncommonly well.",
    author: "John D. Rockefeller",
    source: "",
  },
  {
    quote: "The harder I work, the luckier I get.",
    author: "Gary Player",
    source: "",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    source: "",
  },
];

function getDailyQuote() {
  const now: Date = new Date();
  const start: Date = new Date(now.getFullYear(), 0, 0);
  const dayOfYear: number = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return quotes[dayOfYear % quotes.length];
}

export default function Quotes() {
  const q: typeof quotes[0] = getDailyQuote();
  const escapedQuote = q.quote.replace(/"/g, '&quot;');
  const quoteHTML = `&ldquo;${escapedQuote}&rdquo;`;

  return (
    <div className="mt-10">
      <p className="text-fluid-xs uppercase tracking-widest text-primary font-semibold mb-6">
        Quote of the day
      </p>
      <div className="flex items-start gap-4 border-2 border-gray-200 rounded-lg p-4">
        <Quote className="w-6 h-6 text-blue-500 mt-1 shrink-0" />
        <div>
          <p className="text-fluid-md font-medium text-secondary italic" dangerouslySetInnerHTML={{ __html: quoteHTML }} />
          <p className="text-fluid-xs text-right text-secondary mt-2">
            — {q.author}
            {q.source && (
              <span className="ml-1 not-italic text-secondary">
                · {q.source}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
