import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import bannerVideos from '../../assets/videos/banner.mp4';

const Banner = () => {
  const videoUrl = bannerVideos;

  return (
    <section id="home" className="w-full overflow-hidden overflow-x-hidden">
      {/* Create a div for the video background */}
      <div
        className=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Place the video inside the div */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>

      <div className="relative flex justify-center items-center w-full h-full lg:h-[700px]">
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
          {' '}
          <RightBanner />
          <LeftBanner />
        </div>
      </div>
    </section>
  );
};

export default Banner;
