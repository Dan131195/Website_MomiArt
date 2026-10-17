import Title from "../assets/video/Titolo.png";
import LoadingCircle from "../assets/video/loading.gif";

const Loading = () => {
  return (
    <div id="loadingContainer" className="text-center">
      <div>
        <img
          src={Title}
          alt="Loading Title animation"
          id="titleAnimationLoading"
        />
      </div>
      <div>
        <img src={LoadingCircle} alt="Loading animation" id="spinnerLoading" />
      </div>
    </div>
  );
};

export default Loading;
