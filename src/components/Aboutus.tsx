import banner from "../assets/ab_banner.jpg";
import img1 from "../assets/about1.svg";
import img2 from "../assets/about2.svg";
import bg_inner from "../assets/ab_inner_bgimg.jpg";
export default function Aboutus() {
  return (
    <>
      <div className="relative">
        <img src={banner} className="w-full"></img>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute p-3 bottom-5 right-5 flex items-center justify-center text-white text-2xl font-bold">
          The most Popular pizza branch in the United States
        </div>
      </div>
      <div id="about_content" className="flex flex-col gap-10 pb-10">
        <img src={img1} className="p-10"></img>
        <div id="text-cotnent" className="flex flex-col gap-3 p-3">
          <div className="font-bold">
            The Signature menu includes pizzas that are rooted in the American
            culinary tradition.
          </div>
          <div className="text-xs">
            We use fresh and high-quality ingredients, especially our Signature
            hand-tossed dough recipe, a Domino`s secret for deliciousness. The
            hand-kneaded dough gives Domino`s pizza a unique soft and fluffy
            texture, unlike any other. We also use high-quality imported cheese.
          </div>
        </div>
        <img src={img2} className="p-10"></img>
        <div id="text-cotnent" className="flex flex-col gap-3 p-3">
          <div className="font-bold">
            We take care in every delivery to ensure it`s fast and that the
            warmth and deliciousness reach your hands for sure
          </div>
          <div className="text-xs">
            We deliver pizzas quickly and use modern technology in
            transportation to maintain the quality of the pizza as close to
            freshly baked as possible. Rest assured that our pizzas are freshly
            baked on every tray."
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg_inner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex flex-col items-center justify-center p-5 gap-3"
      >
        <div className="text-white">
          Currently, Domino`s Pizza has a total of
        </div>
        <div
          className="flex flex-col items-center justify-center w-42 h-42 rounded-full gap-3 text-white"
          style={{ backgroundColor: "#00a3e0" }}
        >
          <div>
            <span className="text-4xl">35</span> Branch
          </div>
          <div className="text-xs">in Thailand</div>
        </div>
      </div>
    </>
  );
}
