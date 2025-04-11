import { APP_CONSTANTS, GMAIL_LINK } from "@/configs/common";
import { DottedBackground } from "./DottedBackground";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto z-10">
        <section className="p-5 md:p-10">
          <h1 className="text-7xl 2xl:text-8xl text-accent-bold w-fit">
            {APP_CONSTANTS.CONTACT}
          </h1>
        </section>
        <section className="p-5 md:p-10">
          <Link
            to={GMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-accent-mild hover:bg-accent flex items-center justify-between gap-5 text-2xl whitespace-nowrap w-fit md:w-1/4"
          >
            {APP_CONSTANTS.EMAIL_US}

            <FaArrowRight />
          </Link>
        </section>
      </div>

      <DottedBackground className="absolute left-0 bottom-0 w-[30%] h-[50%]" />
    </section>
  );
};

export default ContactSection;
