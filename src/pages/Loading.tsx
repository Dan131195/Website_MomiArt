import MomiArt from "../assets/video/MomiArt.png";
import LoadingCircle from "../assets/video/loading.gif";

const Loading = () => {
  return (
    <div id="loadingContainer" className="text-center">
      <div>
        <img
          src={MomiArt}
          alt="Loading MomiArt animation"
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
