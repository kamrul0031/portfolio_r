import Loading from '../assets/SigGif.gif';

export default function Loader() {
    return (
      <div className="h-screen flex items-center justify-center">
        <img className="" src={Loading} alt="Loading..." />
      </div>
    );
  }
  