import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <section className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base text-white-400 leading-7 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect Size In Store. Get Rewards
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
