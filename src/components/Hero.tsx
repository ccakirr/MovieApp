interface HeroProps {
  searchItem?: string;
  text: string;
}

function Hero({ searchItem, text }: HeroProps) {
  return (
    <>
      <div className="bg-dark d-flex justify-content-center align-items-center pt-2">
        <p className="fs-1 text-light">
          {text} <span className="badge text-bg-secondary">{searchItem}</span>
        </p>
      </div>
    </>
  );
}

export default Hero;
