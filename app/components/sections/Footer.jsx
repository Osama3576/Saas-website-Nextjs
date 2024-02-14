import Link from 'next/link';

function Footer() {
  return (
    <footer className="grid w-full grid-cols-1 gap-6 p-4 border-t-2 md:gap-0 md:p-8 bg-slate-100 md:grid-cols-2">
      <div className="flex flex-col justify-between row-start-2 md:row-start-1 text-slate-400">
        <p>CODE GEEKS UNIVERSE 2024</p>

        <Link href="#">Cookies & Data</Link>
      </div>

      <div className="grid grid-cols-3 text-slate-400">
        <ul>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Start
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Pricing
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Schedule a Call
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Hardware
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Legal Information
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="transition hover:text-slate-600"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
