import NextJs from '../Logos/NextJs';
import Shadecn from '../Logos/Shadecn';
import Tailwindcss from '../Logos/Tailwindcss';

function NextWebFlowSection() {
  return (
    <section
      id="About"
      className="relative w-full max-w-screen-xl px-6 pt-16 mx-auto border-b-2 section sm:px-8 lg:px-12 lg:pt-24"
    >
      <div className="mb-[2rem] max-w-[26rem]">
        <h1 className="mb-6 text-3xl font-bold">
          No Webflow, no Framer, but real Next.js development
        </h1>
        <p>
          Yep. Low code website builders might be great for getting a
          landing page up quickly. But we believe that in the long
          run, nothing beats a modern frontend stack. It allows full
          control over design and animations, as well as providing a
          solid base to fully integrate services like payments,
          content, search, booking and many more.
        </p>
      </div>

      <div className="grid items-center w-full grid-cols-2 mb-8 md:grid-cols-3 md:gap-4 ">
        <NextJs />
        <Tailwindcss />
        <Shadecn />
      </div>
    </section>
  );
}

export default NextWebFlowSection;
