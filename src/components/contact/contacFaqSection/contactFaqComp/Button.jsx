export default function Button({ scrollToContact }) {
  return (
    <button className="flex relative gap-3 justify-center items-center py-1.5 pr-1.5 pl-3.5 bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] rounded cursor-pointer max-sm:px-3.5 max-sm:py-3 max-sm:w-full hover:bg-emerald-100 hover:shadow-sm shadow-emerald-100/50 hover:bg-none">
      <span onClick={() => scrollToContact(600, 0)}className="relative text-base font-bold tracking-wide leading-6 text-zinc-900 max-sm:text-sm">
        Send Us A Message
      </span>
      <div>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow-icon"
          style={{ width: '32px', height: '32px', fill: '#002921', position: 'relative' }}
        >
          <rect width="32" height="32" fill="#002921"></rect>
          <path d="M21.3386 12.5523L9.86315 24.0277L7.97754 22.1421L19.453 10.6667H9.33863V8H24.0053V22.6667H21.3386V12.5523Z" fill="#E9FEF5"></path>
        </svg>
      </div>
    </button>
  );
}
