import bannerImg from "/src/assets/bannerImg.png";

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <img
        data-aos="fade-right"
        data-aos-once="true"
        className="w-[240px] h-[300px] lg:w-[350px] lg:h-[450px] mb-20"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
