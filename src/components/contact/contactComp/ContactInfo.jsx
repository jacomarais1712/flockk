import React from 'react';

export const ContactInfo = ({ icon, title, content, isLink = false, href }) => {
  const ContentElement = isLink ? 'a' : 'div';
  const contentProps = isLink ? { 
    href: `${href.link}`, target: `${href.target ? href.target : ''}`, className: 'hover:emerald-600 transition-opacity' } : {};

  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-60">
      <div className="flex gap-2 items-center self-center p-5 w-20 h-20 bg-black bg-opacity-30">
        <img
          src={icon}
          alt={`${title} icon`}
          className="object-contain self-stretch my-auto w-10 aspect-square shadow-[0px_0px_8px_rgba(35,243,153,0.3)]"
        />
      </div>
      <div className="flex flex-col mt-6 w-full text-center">
        <header className="flex flex-col w-full text-4xl font-medium tracking-normal leading-tight text-zinc-200">
          <h3 className="text-zinc-200">
            {title}
          </h3>
        </header>
        <ContentElement
          {...contentProps}
          className={`mt-6 text-base tracking-wide text-neutral-300 ${isLink ? 'hover:opacity-80 transition-opacity' : ''}`}
        >
          {isLink ? (
            <span style={{ textDecoration: 'underline', color: 'rgba(197,207,210,1)' }}>
              {content}
            </span>
          ) : (
            content
          )}
        </ContentElement>
      </div>
    </article>
  );
};
