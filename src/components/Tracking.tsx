import trackingImg from "../assets/dmn_tracking.svg";
import { useState } from "react";

export default function Tracking() {
  const [phone, checkphone] = useState("");
  const isphoneValid = phone.replace(/\D/g, "").length === 9;
  return (
    <div className="flex items-center justify-center p-4 pb-16 text-center">
      <div className="flex flex-col justify-center items-center gap-6 p-2">
        <img className="p-2 h-48" src={trackingImg}></img>
        <div className="text-2xl font-bold">Track your food</div>
        <span className="text-sm">
          Enter your phone number Then you can start track your food
        </span>
        <div className="flex flex-col gap-1">
          <div className="flex border">
            <div className="border-r flex item-center p-4">+66</div>
            <input
              className="p-1 w-full"
              value={phone}
              onChange={(e) => checkphone(e.target.value)}
              type="tel"
              placeholder="Phone number *"
            ></input>
            <button
              disabled={!isphoneValid}
              className={`px-4 py-2 text-sm whitespace-nowrap rounded-lg m-1 ${isphoneValid ? "text-white" : "bg-gray-200 text-gray-400"}`}
              style={isphoneValid ? { backgroundColor: "#006491" } : {}}
            >
              Confirm OTP
            </button>
          </div>
          <div className="flex w-full justify-end text-xs">
            <span>e.g. 08X-XXX-XXXX</span>
          </div>
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
