import React, { useState } from "react";

export const PricingTabs = () => {
  const [activeTab, setActiveTab] = useState('yearly');

  return (
    <div className="flex items-start self-center p-2 text-base font-bold tracking-wide whitespace-nowrap rounded-lg border border-emerald-400 border-solid">
      <button
        className={`flex gap-2 justify-center items-center px-6 py-2 w-[200px] max-md:px-5 ${
          activeTab === 'monthly'
            ? 'rounded bg-zinc-200 text-zinc-900'
            : 'text-zinc-200'
        }`}
        onClick={() => setActiveTab('monthly')}
      >
        <span className="self-stretch my-auto">Monthly</span>
      </button>
      <button
        className={`flex gap-2 justify-center items-center px-6 py-2 w-[200px] max-md:px-5 ${
          activeTab === 'yearly'
            ? 'rounded bg-zinc-200 text-zinc-900'
            : 'text-zinc-200'
        }`}
        onClick={() => setActiveTab('yearly')}
      >
        <span className="self-stretch my-auto">Yearly</span>
      </button>
    </div>
  );
};
