import CheckIcon from './CheckIcon';

const ServiceListItem = ({ children }) => {
  return (
    <li className="flex relative gap-4 items-center w-full max-sm:gap-3">
      <CheckIcon />
      <p className="relative text-base tracking-wide leading-6 text-gray-400 flex-[1_0_0] max-md:text-base max-sm:text-sm">
        {children}
      </p>
    </li>
  );
};

export default ServiceListItem;
