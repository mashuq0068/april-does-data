const HeroBg = () => {
  return (
    <div
      className="relative w-full h-[600px] "
      style={{ backgroundImage: "url('/hero-2.png')" }}
    >
      {/* Overlay Text */}
      <div className="absolute text-purple-500 left-10 top-1/2 transform -translate-y-1/2">
        <h1 className="text-6xl md:text-7xl font-bold gradient-text drop-shadow-lg">
          Your Big Hero Text
        </h1>
      </div>
    </div>
  );
};

export default HeroBg;
