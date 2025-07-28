import react from 'react';
import { Link } from 'react-router-dom';

export const PrimaryButton = ({ text, onClick }) => {
  const handleClick = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  }
  return (
    <Link to='/contact'>
      <button
        className="flex relative gap-3 justify-center items-center py-1.5 pr-1.5 pl-3.5 bg-[linear-gradient(180deg,#23F399_0%,#19E48B_100%)] rounded cursor-pointer max-md:justify-center hover:bg-emerald-100 hover:shadow-sm shadow-emerald-100/50 hover:bg-none"
        onClick={() => handleClick()}
      >
        <span className="relative text-base font-bold tracking-wide leading-6 text-zinc-900 max-sm:text-sm">
          {text}
        </span>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"32\" height=\"33\" viewBox=\"0 0 32 33\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-icon\" style=\"width: 32px; height: 32px; fill: #002921; position: relative\"> <rect width=\"32\" height=\"32\" transform=\"translate(0 0.5)\" fill=\"#002921\"></rect> <path d=\"M21.3383 13.0523L9.86285 24.5277L7.97723 22.6421L19.4527 11.1667H9.33833V8.5H24.005V23.1667H21.3383V13.0523Z\" fill=\"#E9FEF5\"></path> </svg>",
            }}
          />
        </div>
      </button>
    </Link>
  );
};
