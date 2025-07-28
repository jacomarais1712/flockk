import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import React, { useState } from "react";
import arrowDownSLineStreamlineRemix from "/Arrow-Down-S-Line--Streamline-Remix.svg";
import arrowRightUpLineStreamlineRemix from "/Arrow-Right-Up-Line--Streamline-Remix.svg";
import image from "flockk_logo.svg";
import union from "flockk_logo_text.svg";

const NavbarDesktop = () => {
  const [activeItem, setActiveItem] = useState("About Us");

  const navigationItems = [
    { name: "Home", hasDropdown: false },
    { name: "About Us", hasDropdown: false },
    { name: "Services", hasDropdown: false },
    { name: "Pricing", hasDropdown: false },
    { name: "Case Studies", hasDropdown: true },
  ];

  return (
    <nav
      className="flex flex-col w-[1440px] items-center justify-center px-16 py-5 relative"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-start relative flex-1 grow">
          <div className="relative w-[136.88px] h-9">
            <img
              className="absolute w-[97px] h-[22px] top-[7px] left-10"
              alt="Flockk logo text"
              src={union}
            />
            <img
              className="absolute w-[27px] h-9 top-0 left-0"
              alt="Flockk logo icon"
              src={image}
            />
          </div>
        </div>

        <NavigationMenu className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
          <NavigationMenuList className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
            {navigationItems.map((item) => (
              <NavigationMenuItem
                key={item.name}
                className="inline-flex items-center justify-center gap-1 relative flex-[0_0_auto]"
              >
                {item.hasDropdown ? (
                  <div className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto]">
                    <NavigationMenuTrigger className="flex items-center justify-center gap-1 relative self-stretch w-full flex-[0_0_auto] bg-transparent border-none p-0 h-auto">
                      <span
                        className={`relative w-fit mt-[-1.00px] font-body-text-regular font-(--body-text-regular-font-weight) text-(length:--body-text-regular-font-size) tracking-(--body-text-regular-letter-spacing) leading-(--body-text-regular-line-height) whitespace-nowrap [font-style:var(--body-text-regular-font-style)] cursor-pointer transition-colors hover:text-flockk-brand-colouremeraldemeral-500 ${
                          activeItem === item.name
                            ? "text-flockk-brand-colouremeraldemeral-500"
                            : "text-flockk-brand-colourneutralneutral-50"
                        }`}
                        onClick={() => setActiveItem(item.name)}
                      >
                        {item.name}
                      </span>
                      <img
                        className="relative w-6 h-6"
                        alt="Dropdown arrow"
                        src={arrowDownSLineStreamlineRemix}
                      />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="p-4 w-48">
                        <p className="text-sm text-muted-foreground">
                          Case studies content would go here
                        </p>
                      </div>
                    </NavigationMenuContent>
                  </div>
                ) : (
                  <button
                    className={`relative w-fit mt-[-1.00px] font-body-text-regular font-(--body-text-regular-font-weight) text-(length:--body-text-regular-font-size) tracking-(--body-text-regular-letter-spacing) leading-(--body-text-regular-line-height) whitespace-nowrap [font-style:var(--body-text-regular-font-style)] cursor-pointer transition-colors hover:text-flockk-brand-colouremeraldemeral-500 bg-transparent border-none p-0 ${
                      activeItem === item.name
                        ? "text-flockk-brand-colouremeraldemeral-500"
                        : "text-flockk-brand-colourneutralneutral-50"
                    }`}
                    onClick={() => setActiveItem(item.name)}
                    aria-current={activeItem === item.name ? "page" : undefined}
                  >
                    {item.name}
                  </button>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center justify-end gap-4 relative flex-1 grow">
          <Button
            className="inline-flex items-center justify-center gap-3 pl-3 pr-1 py-1 relative flex-[0_0_auto] rounded bg-[linear-gradient(180deg,rgba(35,243,153,1)_0%,rgba(25,228,139,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(30,218,138,1)_0%,rgba(20,205,125,1)_100%)] border-none h-auto"
            aria-label="Contact us"
          >
            <span className="relative w-fit font-button-label font-(--button-label-font-weight) text-flockk-brand-colourneutralneutral-800 text-(length:--button-label-font-size) tracking-(--button-label-letter-spacing) leading-(--button-label-line-height) whitespace-nowrap [font-style:var(--button-label-font-style)]">
              Let&apos;s Talk
            </span>
            <img
              className="relative w-8 h-8"
              alt="External link arrow"
              src={arrowRightUpLineStreamlineRemix}
            />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
