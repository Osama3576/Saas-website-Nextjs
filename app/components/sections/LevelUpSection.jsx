import { Button } from '@/components/ui/button';

function LevelUpSection() {
  return (
    <section className="relative section overflow-hidden w-full flex flex-col py-8  items-center gap-6 max-w-screen-xl   px-6   mx-auto sm:px-8 lg:px-12 lg:pt-[6rem] lg:pb-24">
      <div className="absolute top-12 left-[20rem] bg-[#E8919C] w-1/2 h-[3rem] blur-3xl sm:blur-4xl transition-opacity duration-500 opacity-40 group-hover:opacity-60"></div>
      <h1 className="text-3xl font-extrabold leading-tight text-center text-black dark:text-white sm:text-4xl lg:text-5xl dark:drop-shadow-lg">
        Level up your SaaS website
      </h1>

      <p className="max-w-[30rem]">
        What are you waiting for? Let's build a beautiful, compelling
        website and raise your product to the level of big players.
      </p>

      <div className="flex items-center gap-4">
        <Button
          variant="secondary"
          className="text-white bg-indigo-500 rounded-full shadow-md hover:bg-indigo-600"
        >
          Get Started
        </Button>
        <Button
          variant="secondary"
          className="bg-white rounded-full shadow-md"
        >
          Schedule a Call
        </Button>
      </div>
    </section>
  );
}

export default LevelUpSection;
