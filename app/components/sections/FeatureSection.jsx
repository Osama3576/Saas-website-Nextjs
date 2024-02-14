import AddUser from '../Icons/AddUser';
import FolderIcon from '../Icons/FolderIcon';
import HeartIcon from '../Icons/HeartIcon';
import LightningIcon from '../Icons/LightningIcon';
import RocketIcon from '../Icons/RocketIcon';
import WatchIcon from '../Icons/WatchIcon';

function FeatureSection() {
  return (
    <section
      id="Process"
      className="relative w-full max-w-screen-xl px-6 py-16 mx-auto section border-y sm:px-8 lg:px-12 lg:pt-24"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
              <WatchIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Struggling to keep your site up-to-date?
            </h1>
          </div>
          <p className="text-slate-500">
            When your product evolves, it can be hard to keep your
            website up-to-date whilst maintaining highest design
            standards.
          </p>
        </div>

        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
              <HeartIcon />
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
            Your perfectly crafted website will place your product on
            a level with big players like Linear or Stripe.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
              <AddUser />
            </div>
            <h1 className="text-xl font-extrabold">
              Generate more users or waitlist signups
            </h1>
          </div>
          <p className="text-slate-500">
            Compelling landing pages will attract more potential users
            and bring you lots of attention on Twitter, ProductHunt,
            etc.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-8 mb-6">
            <div className="w-[4rem] rounded-2xl p-4 border border-rose-300">
              <LightningIcon />
            </div>
            <h1 className="text-xl font-extrabold">
              Let your site magically grow with your product
            </h1>
          </div>
          <p className="text-slate-500">
            While you develop new product features, we'll take care of
            adding great feature pages to your website.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
