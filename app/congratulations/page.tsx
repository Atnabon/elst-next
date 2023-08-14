import type { NextPage } from "next";
import Image from "next/image";

const Congratulations: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-left text-sm text-darkslategray-500 font-poppins">
      <div className="absolute top-[0px] left-[959px] bg-white w-[960px] h-[1286px]" />
      <b className="absolute top-[643px] left-[1182px] text-5xl">
        Congratulations, you job has been posted.
      </b>
      <div className="absolute top-[24px] left-[0px] w-[1920px] h-[68px] text-darkslategray-100">
        <Image
          className="absolute top-[67px] left-[0px] opacity-[0.1] mix-blend-normal"
          width={1920}
          height={1}
          alt=""
          src="/line-21.svg"
        />
        <Image
          className="absolute top-[4px] left-[19.5px] object-cover"
          width={172}
          height={38}
          alt=""
          src="/staffmerge-final-v201@2x.png"
        />
        <div className="absolute top-[0px] left-[1738px] w-[161px] h-[46px]">
          <div className="absolute top-[0px] left-[0.5px] w-40 h-[46px] overflow-hidden">
            <div className="absolute h-full w-[28.75%] top-[0%] right-[71.25%] bottom-[0%] left-[0%] rounded-[50%] bg-whitesmoke-300" />
            <div className="absolute top-[calc(50%_-_10px)] left-[35%]">
              John Smith
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[87.5%] text-xl font-material-icons text-black">
              
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[960px] h-[1080px] overflow-hidden text-23xl text-white">
        <Image
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          width={960}
          height={1080}
          alt=""
          src="/image@2x.png"
        />
        <b className="absolute top-[calc(50%_-_414px)] left-[19.79%] leading-[83px]">
          Connect. Merge. Work
        </b>
      </div>
      <Image
        className="absolute top-[237.09px] left-[1399.09px] hidden opacity-[0.5] mix-blend-normal"
        width={12}
        height={12}
        alt=""
        src="/path.svg"
      />
      <Image
        className="absolute top-[464px] left-[1393px]"
        width={100}
        height={100}
        alt=""
        src="/checked-4.svg"
      />
      <div className="absolute top-[704px] left-[1273px] text-darkslategray-300 text-center">
        Give us a few seconds to take you to homepage
      </div>
    </div>
  );
};

export default Congratulations;
