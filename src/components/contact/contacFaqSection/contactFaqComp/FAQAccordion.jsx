import { useState } from 'react';
import AccordionItem from './AccordionItem';

const faqData = [
  {
    id: 1,
    question: "What exactly is included in your Google Ads management?",
    answer: "Our service is a complete, hands-on management of your Google Ads account. Depending on your chosen package, this includes everything from initial strategy, keyword research, and campaign creation to continuous bid management, A/B testing of ads, performance monitoring, and detailed reporting. We handle the technical complexities so you can focus on running your business.",
    isOpen: true
  },
  {
    id: 2,
    question: "How long does it take to see results?",
    answer: 'While every account is different, you can typically expect to see initial data and performance indicators within the first 30 days. The first 1-3 months are crucial for data gathering, learning, and optimization. This "learning phase" allows us to build a foundation for sustainable, long-term growth and a strong return on investment.',
    isOpen: false
  },
  {
    id: 3,
    question: "Do you manage more than just Google Search ads?",
    answer: "Yes. We believe in a full-funnel approach. We are experts in creating and managing a wide range of Google Ads campaigns, including Shopping, YouTube, Display, and Performance Max. We'll recommend the best campaign types to help you achieve your specific business goals.",
    isOpen: false
  },
  {
    id: 4,
    question: "Why should I hire your agency instead of running ads myself?",
    answer: "Google Ads is deceptively complex. While easy to start, it's very difficult to master. Hiring us saves you two critical things: time and money. You save time by letting experts handle the daily management. You save money by avoiding common, costly mistakes and leveraging our expertise to maximize your ad spend for better results, faster.",
    isOpen: false
  },
  {
    id: 5,
    question: "How does your pricing work? Is my ad spend included in your monthly fee?",
    answer: "Our pricing is transparent. There are two separate costs:",
    bullet1: "1. Your Ad Spend: This is the budget you pay directly to Google to run your ads.",
    bullet2: "2. Our Management Fee: This is the monthly fee you pay to us for our expertise, management, and strategic services. We help you determine the optimal ad spend for your goals, but it is not included in our fee.",
    isOpen: false
  },
  {
    id: 6,
    question: "Who owns the Google Ads account?",
    answer: "You do, 100%. We operate with full transparency. The Google Ads account is created under your name and ownership. You will always have full administrative access. We simply act as expert managers on your behalf. If we ever part ways, you retain complete control of your account and all its historical data.",
    isOpen: false
  },
  {
    id: 7,
    question: "Do I have to sign a long-term contract?",
    answer: "No. We believe in earning your business every month. Our services operate on a flexible monthly rolling basis. While we highly recommend a minimum of three months to achieve meaningful results, you are free to cancel at any time with 30 days' notice.",
    isOpen: false
  },
  {
    id: 8,
    question: "What should my monthly ad budget (ad spend) be?",
    answer: "This depends on your industry, goals, and how competitive your market is. For our Launch package, we often see clients starting small. Our Scale and Dominate packages are designed for businesses ready to invest more significant budgets to capture greater market share, as noted in the package descriptions. We'll provide a specific recommendation during our initial consultation.",
    isOpen: false
  }
];

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState(new Set([1])); // First item open by default

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="flex relative flex-col gap-2 items-start flex-[1_0_0] max-md:w-full">
      <div className="flex relative flex-col gap-4 items-start self-stretch">
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.has(item.id)}
            onToggle={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
}
