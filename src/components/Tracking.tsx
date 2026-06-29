import trackingImg from "../assets/dmn_tracking.svg";

export default function Tracking() {
  return (
    <div className="flex items-center justify-center p-4 pb-16 text-center">
      <div className="flex flex-col justify-center items-center gap-6 p-2">
        <img className="p-2 h-48" src={trackingImg}></img>
        <div className="text-2xl font-bold">Track your food</div>
        <span className="text-sm">
          Enter your phone number Then you can start track your food
        </span>
        <div className="flex border">
          <div className="border-r flex item-center p-1">+66</div>
          <input
            className="p-1"
            type="tel"
            placeholder="Phone number *"
          ></input>
          <button className="absolute right-2 ">Confirm OTP</button>
        </div>
        <button
          className="flex w-full items-center p-3 gap-2 rounded-xl justify-center text-white font-bold"
          style={{ backgroundColor: "#006491" }}
        >
          Start tracking
        </button>
      </div>
    </div>
  );
}
