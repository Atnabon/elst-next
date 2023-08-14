import type { NextPage } from "next";
import Image from "next/image";

const ScreeningTest1: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-left text-sm text-white font-poppins">
      <div className="absolute top-[0px] left-[959px] bg-white w-[960px] h-[1286px]" />
      <b className="absolute top-[142px] left-[1080px] text-[22px] text-darkslategray-500 text-black">
        Add Screening Tests
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
          src="/staffmerge-final-v2011@2x.png"
        />
        <div className="absolute top-[0px] left-[1738.5px] w-[135px] h-[46px]">
          <div className="absolute top-[0px] left-[0px] w-[135px] h-[46px] overflow-hidden">
            <div className="absolute h-full w-[34.07%] top-[0%] right-[65.93%] bottom-[0%] left-[0%] rounded-[50%] bg-whitesmoke-300" />
            <div className="absolute top-[calc(50%_-_10px)] left-[41.48%]">
              John Smith
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[960px] h-[1080px] overflow-hidden text-23xl">
        <Image
          className="absolute top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          width={960}
          height={1080}
          alt=""
          src="/image@2x.png"
        />
        <b className="absolute top-[calc(50%_-_414px)] left-[19.79%] leading-[83px] text-[42px]">
          Connect. Merge. Work
        </b>
      </div>
      <div className="absolute top-[205px] left-[1081px] w-[378px] h-[60px] text-gray-600">
        <div className="absolute top-[0px] left-[0px] w-[378px] h-[60px]">
          <div className="absolute top-[0px] left-[0px] w-[378px] h-[60px] overflow-hidden">
            <div className="absolute top-[calc(50%_-_30px)] left-[0%]">
              <p className="m-0">{`You can add screening test for the candidates. If they `}</p>
              <p className="m-0">{`pass, they will be welcome to have an interview in the `}</p>
              <p className="m-0">next round.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[326px] left-[1197px] w-[246px] h-[45px] text-center text-base">
        <div className="absolute top-[0px] left-[0px] w-[246px] h-[45px] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11.5px)] left-[43.9%] text-black">Yes</b>
        </div>
      </div>
      <Image
        className="absolute top-[44px] left-[1887px] "
        width={12}
        height={6}
        alt=""
        src="/path.svg"
      />
      <b className="absolute top-[338px] left-[1080px] text-steelblue-200 text-black">
        Cancel
      </b>
    </div>
  );
};

export default ScreeningTest1;
