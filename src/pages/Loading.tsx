import loadingAnimation from "../assets/svg/loading.svg";

const Loading = () => {
  return (
    <div id="loadingContainer" className="text-center">
      <div>
        <img src={loadingAnimation} alt="Loading animation" />
        <p>LOADING ...</p>
      </div>
    </div>
  );
};

export default Loading;
