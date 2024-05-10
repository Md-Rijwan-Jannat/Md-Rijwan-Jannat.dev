import { useState } from "react";
import Slider from "react-slider";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const SampleNextArrow = ({ onClick }) => (
  <div
    className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-1000 rounded-md text-2xl text-gray-200 flex justify-center items-center shadow-shadowOne cursor-pointer"
    onClick={onClick}
  >
    <HiArrowRight />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div
    className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-1000 rounded-md text-2xl text-gray-200 flex justify-center items-center shadow-shadowOne cursor-pointer"
    onClick={onClick}
  >
    <HiArrowLeft />
  </div>
);

const SliderModal = ({ isOpen, images, closeToggleModal }) => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setValue((prevValue) =>
      prevValue === images.length - 1 ? 0 : prevValue + 1
    );
  };

  const handlePrev = () => {
    setValue((prevValue) =>
      prevValue === 0 ? images.length - 1 : prevValue - 1
    );
  };

  return (
    <div className={`fixed inset-0 z-[999] ${isOpen ? "block" : "hidden"}`}>
      <div
        onClick={closeToggleModal}
        className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-[#202223] w-11/12 md:w-1/2 lg:w-[600px] max-h-[80vh] p-4 rounded-lg relative"
        >
          <Slider
            value={value}
            onChange={handleChange}
            min={0}
            max={images.length - 1}
            renderThumb={(props) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "6px",
                  width: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#ff014f",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
                }}
              />
            )}
            renderTrack={(props) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "5px",
                  backgroundColor: "#ccc",
                }}
              />
            )}
          />
          <div className="flex flex-col justify-center mt-4">
            <div className="flex justify-between items-center my-4">
              <SamplePrevArrow onClick={handlePrev} />
              <SampleNextArrow onClick={handleNext} />
            </div>
            {images.map((image, index) => (
              <img
                key={index}
                className={`w-full h-[300px] md:h-[350px] lg:h-[400px] object-cover rounded-lg ${
                  index === value ? "block" : "hidden"
                }`}
                src={image.image}
                alt="project-page"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderModal;
