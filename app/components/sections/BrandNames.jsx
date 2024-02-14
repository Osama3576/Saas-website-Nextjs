import Image from 'next/image';

function BrandNames() {
  return (
    <section className="w-full max-w-screen-xl px-6 mx-auto mt-6 overflow-x-hidden overflow-y-hidden section sm:px-8 lg:px-12 lg:pb-16">
      <div className="relative overflow-x-hidden overflow-y-hidden lg:-mx-16">
        <div>
          <div className="flex py-4 animate-scroll">
            <div className="relative w-64 shrink-0">
              <Image
                className="object-cover"
                src="/logos/logo-1.png"
                width={150}
                height={150}
                alt="img"
              />
            </div>

            <div className="relative w-64 shrink-0">
              <Image
                className="object-cover"
                src="/logos/logo-2.png"
                width={150}
                height={150}
                alt="img"
              />
            </div>

            <div className="relative w-64 shrink-0">
              <Image
                className="object-cover"
                src="/logos/logo-3.png"
                width={150}
                height={150}
                alt="img"
              />
            </div>

            <div className="relative w-64 shrink-0">
              <Image
                className="object-cover"
                src="/logos/logo-4.png"
                width={150}
                height={150}
                alt="img"
              />
            </div>

            <div className="relative w-64 shrink-0">
              <Image
                className="object-cover"
                src="/logos/logo-5.png"
                width={150}
                height={150}
                alt="img"
              />
            </div>

            <div className="relative w-64 shrink-0">
              <Image
                className="object-cover"
                src="/logos/logo-6.png"
                width={150}
                height={150}
                alt="img"
              />
            </div>

            <div className="relative w-64 shrink-0">
              <Image
                className="object-cover"
                src="/logos/logo-7.png"
                width={150}
                height={150}
                alt="img"
              />
            </div>

            <div className="relative w-64 shrink-0">
              <Image
                className="object-cover"
                src="/logos/logo-8.png"
                width={150}
                height={150}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandNames;
