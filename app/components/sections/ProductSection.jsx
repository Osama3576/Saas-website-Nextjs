import BeautyIcon from '../Icons/BeautyIcon';
import FolderIcon from '../Icons/FolderIcon';
import RocketIcon from '../Icons/RocketIcon';

/* eslint-disable @next/next/no-img-element */
function ProductSection() {
  return (
    <section
      id="Work"
      className="relative w-full max-w-screen-xl px-6 py-4 pt-16 mx-auto border-b-2 section md:py-16 sm:px-8 lg:px-12 lg:pt-24"
    >
      <div className="mb-8 lg:mb-12">
        <h1 className="text-3xl font-extrabold leading-tight text-black dark:text-white font-display sm:text-4xl lg:text-5xl dark:drop-shadow-lg lg:text-center">
          Unlock your products potential
        </h1>
      </div>

      <div className="grid gap-4 bg-[#F9FAFB] grid-cols-1 p-10 border-2 rounded-3xl md:grid-cols-2">
        <div>
          <h1 className="mb-6 text-3xl font-semibold">
            Design & Development
          </h1>
          <p>
            We'll commence work on your active request within one
            business day, Monday to Friday. You'll be notified upon
            completion – typically within approximately 48 hours for
            design requests and around 96 hours for development
            requests, depending on the nature of the task.
          </p>
        </div>
        <div className="relative">
          <img
            className="object-cover bg-center"
            src="/web-design.png"
            fill={true}
            alt="webdesign"
          />
        </div>
      </div>

      <div className="my-[4rem] max-w-[26rem]">
        <h1 className="mb-6 text-3xl font-bold">
          Cutting-edge design, crafted for your product
        </h1>
        <p>
          We appreciate exceptional design, recognizing its ability to
          not only draw in more potential users but also garner
          significant attention for your product on social media. Our
          design process is streamlined to collaborate seamlessly with
          Figma, allowing you to effortlessly view previews and
          prototypes.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
              <RocketIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Put your product ahead of your competition
            </h1>
          </div>
          <p className="text-slate-500">
            When focussing on your product, your website can sometimes
            become unstructured and heavy over time, which also
            impacts the design.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
              <BeautyIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Unhappy with your current design/structure?
            </h1>
          </div>
          <p className="text-slate-500">
            When focussing on your product, your website can sometimes
            become unstructured and heavy over time, which also
            impacts the design.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
              <FolderIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              No budget for an entire in-house team?
            </h1>
          </div>
          <p className="text-slate-500">
            Great designers and developers are expensive. Who can
            afford A-players to build and maintain their products
            website?
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
