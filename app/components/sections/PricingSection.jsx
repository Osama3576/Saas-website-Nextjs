import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

function PricingSection() {
  return (
    <section
      id="Pricing"
      className=" w-full section max-w-screen-xl py-8 border-b-2  px-6  mx-auto sm:px-8 lg:px-12 lg:pt-[6rem] lg:pb-24"
    >
      <h1 className="text-3xl font-extrabold leading-tight text-center text-black dark:text-white sm:text-4xl lg:text-5xl dark:drop-shadow-lg">
        Pricing
      </h1>
      <div className="grid w-full max-w-screen-xl grid-cols-1  pt-[3rem]  mx-auto sm:px-8 lg:px-12 lg:pt-[6rem] lg:grid-cols-3 gap-y-12 gap-x-16 lg:pb-24">
        <div className="p-[1rem] md:p-[2rem] w-full h-full  rounded-3xl lg:rounded-[2.5rem] bg-slate-100 border shadow-md ">
          <h1 className="mb-4 text-3xl font-bold">
            Design <br></br>only
          </h1>

          <p className="mb-4 text-slate-500">
            Get everything you need for a Next-Level SaaS Website.
          </p>

          <div className="flex items-center gap-4 mb-[2rem]">
            <h2 className="text-4xl font-medium">$ 1299</h2>
            <span className="text-sm text-slate-500">
              per<br></br> month
            </span>
          </div>

          <ul className="text-slate-500 mb-[3rem]">
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Unlimited design requests</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>One active request</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>30h average return time</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Unlimited team members</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Easy credit card payments</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Pause or cancel anytime</span>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              className="bg-white rounded-full shadow-md"
            >
              Get Started
            </Button>
            <div className="flex items-center gap-2">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-slate-500">4 slots left</p>
            </div>
          </div>
        </div>

        <div className="p-[2rem] w-full h-full  rounded-3xl lg:rounded-[2.5rem] bg-slate-100 border shadow-md ">
          <h1 className="mb-4 text-3xl font-bold">
            Design & <br></br>Development
          </h1>

          <p className="mb-4 text-slate-500">
            Get your Next-Level SaaS Website completely built &
            maintained.
          </p>

          <div className="flex items-center gap-4 mb-[2rem]">
            <h2 className="text-4xl font-medium">$ 2500</h2>
            <span className="text-sm text-slate-500">
              per<br></br> month
            </span>
          </div>

          <ul className="text-slate-500 mb-[3rem]">
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Unlimited design & dev requests</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>One active request</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>24h average design time</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>34h development return time</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Unlimited team members</span>
            </li>
            <li className="flex items-center gap-2">
              <Check size={15} />
              <span>Easy credit card payments</span>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <Button
              variant="secondary"
              className="text-white bg-indigo-500 rounded-full shadow-md hover:bg-indigo-600"
            >
              Get Started
            </Button>
            <div className="flex items-center gap-2">
              <span class="relative flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              <p className="text-slate-500">3 slots left</p>
            </div>
          </div>
        </div>

        <div className="p-[2rem] w-full h-full  rounded-3xl lg:rounded-[2.5rem]">
          <h1 className="mb-4 text-3xl font-bold">
            Not sure if this is <br></br>right for you?
          </h1>

          <p className="mb-4 text-slate-500">
            We offer premium services that aren't affordable for
            everyone. If you're not sure wether our service is the
            right fit for your company or product, feel free to
            schedule a call with our founder Lukas.
          </p>

          <Button
            variant="secondary"
            className="bg-white rounded-full shadow-md"
          >
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
