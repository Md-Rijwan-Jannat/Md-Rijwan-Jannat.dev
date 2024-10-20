import bannerImg from '../../../src/assets/images/banner-image.jpg';

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <img
        data-aos="fade-right"
        data-aos-once="true"
        className="w-[300px] md:w-[350px] h-[300px] md:h-[350px] object-cover rounded-full mt-20"
        src={bannerImg}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
