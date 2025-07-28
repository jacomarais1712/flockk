export default function AccordionItem({ question, answer, bullet1, bullet2, isOpen, onToggle }) {
  return (
    <div className="flex relative flex-col items-start self-stretch rounded-lg border border-solid backdrop-blur border-emerald-200 border-opacity-30 accordion-bg">
      <button
        className="flex relative gap-6 items-center self-stretch px-6 py-5 cursor-pointer max-sm:px-5 max-sm:py-4 w-full text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`answer-${question}`}
      >
        <span className="relative text-base tracking-wide leading-6 flex-[1_0_0] text-zinc-200 max-sm:text-sm">
          {question}
        </span>
        <div>
          {isOpen ? (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-up-icon"
              style={{ width: '32px', height: '32px', position: 'relative' }}
            >
              <path d="M15.9999 14.4377L9.40026 21.0374L7.51465 19.1518L15.9999 10.6665L24.4852 19.1518L22.5996 21.0374L15.9999 14.4377Z" fill="#E3E7E8"></path>
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-down-icon"
              style={{ width: '32px', height: '32px', position: 'relative' }}
            >
              <path d="M15.9999 17.562L22.5996 10.9624L24.4852 12.848L15.9999 21.3334L7.51465 12.848L9.40026 10.9624L15.9999 17.562Z" fill="#E3E7E8"></path>
            </svg>
          )}
        </div>
      </button>
      {isOpen && (
        <div
          className="flex relative gap-4 items-start self-stretch px-6 pt-0 pb-6 max-sm:px-5 max-sm:pt-0 max-sm:pb-5"
          id={`answer-${question}`}
          role="region"
          aria-labelledby={`question-${question}`}
        >
          <p className={`${bullet1 !== null || bullet2 !== null ? 'flex flex-col justify-center' : '' }relative text-sm tracking-wide leading-6 text-gray-400 flex-[1_0_0] max-sm:text-sm`}>
            {answer}
            <span>{bullet1 !== null && (bullet1)}</span>
            <span>{bullet2 !== null && (bullet2)}</span>
          </p>
        </div>
      )}
    </div>
  );
}
