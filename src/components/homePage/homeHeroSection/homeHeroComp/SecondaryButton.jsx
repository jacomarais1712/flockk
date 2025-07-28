import react from 'react';
import { Link } from 'react-router-dom';

export const SecondaryButton = ({ text, onClick }) => {
  const handleClick = () => {
    window.scrollTo({ top: 600, behavior: 'smooth' });
  }
  return (
    <Link 
      to='/pricing'
      onClick={handleClick}
    >
      <button
        className="flex relative gap-1 justify-center items-center py-2.5 pr-1.5 pl-3.5 rounded cursor-pointer max-md:justify-center"
        onClick={onClick}
      >
        <span className="relative text-base font-bold tracking-wide leading-6 text-white max-sm:text-sm link">
          {text}
        </span>
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "<svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-right-icon\" style=\"width: 24px; height: 24px; aspect-ratio: 1/1; position: relative\"> <path d=\"M13.1717 12.5007L8.22192 7.55093L9.63614 6.13672L16.0001 12.5007L9.63614 18.8646L8.22192 17.4504L13.1717 12.5007Z\" fill=\"white\"></path> </svg>",
            }}
          />
        </div>
      </button>
    </Link>
  );
};
