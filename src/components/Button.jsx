const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${
        className ?? ""
      } inline-flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-90 transition-all duration-300 w-auto max-w-full text-sm sm:text-base md:text-lg`}
    >
      <span className="truncate">{text}</span>
      <img
        src="/images/arrow-down.svg"
        alt="arrow"
        className="ml-3 w-5 h-5 shrink-0"
      />
    </a>
  );
};

export default Button;
