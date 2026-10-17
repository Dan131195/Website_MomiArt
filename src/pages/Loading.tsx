import Title from "../assets/video/Titolo.png";

const Loading = () => {
  return (
    <div id="loadingContainer" className="text-center">
      <div>
        <img src={Title} alt="Loading animation" />
      </div>
    </div>
  );
};

export default Loading;
