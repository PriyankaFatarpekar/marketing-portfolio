export default function Footer() {
  return (
    <footer className="bg-[#171717] px-5 pb-8 text-white">
      <div className="container-width border-t border-white/10 pt-7">
        <div className="flex flex-col justify-between gap-4 text-sm text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Priyanka Fatarpekar
          </p>

          <p>
            Digital Marketing · Web · SEO · Content
          </p>
        </div>
      </div>
    </footer>
  );
}