const TechCard = ({ model }) => {
  return (
    <div className="relative w-full h-full min-h-[120px] flex justify-center items-center p-4">
      <img
        src={model.imgPath}
        alt={model.name}
        className="object-contain max-h-[100px] sm:max-h-[80px] md:max-h-[120px]"
        loading="lazy"
      />
    </div>
  );
};

export default TechCard;
