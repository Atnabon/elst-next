import type { NextPage } from "next";
import Image from "next/image";

const Homepage: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-center text-base text-steelblue-200 font-poppins">
      <div className="absolute top-[0px] left-[959px] bg-white w-[960px] h-[1080px]" />
      <div className="absolute top-[1317px] left-[916px] w-[360px] h-[45px] text-white">
        <div className="absolute top-[0px] left-[0px] w-[360px] h-[45px] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11.5px)] left-[28.33%]">
            Save and Continue
          </b>
        </div>
      </div>
      <div className="absolute top-[1317px] left-[526px] w-[360px] h-[45px] overflow-hidden text-mini">
        <div className="absolute h-[102.22%] w-[100.28%] top-[-1.11%] right-[-0.14%] bottom-[-1.11%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-steelblue-200" />
        <b className="absolute top-[calc(50%_-_10.5px)] left-[36.81%]">
          Edit Resume
        </b>
      </div>
      <div className="absolute top-[39px] left-[1218px] text-xl font-ionicons text-darkslategray-100 text-left hidden">
        
      </div>
      <Image
        className="absolute top-[0px] left-[0px] object-cover"
        width={1920}
        height={1080}
        alt=""
        src="/21-homepage2x@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1920px] h-[1080px] opacity-[0.5] mix-blend-normal" />
      <div className="absolute top-[475px] left-[770px] w-[380px] h-[131px] overflow-hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white shadow-[0px_0px_17px_rgba(99,_99,_99,_0.12)]" />
        <b className="absolute top-[calc(50%_-_42.5px)] left-[2.89%] leading-[28px] text-left">
          Do you want to archive the job post?
        </b>
        <div className="absolute h-[34.35%] w-[46.05%] top-[55.73%] right-[51.05%] bottom-[9.92%] left-[2.89%] overflow-hidden text-mini">
          <div className="absolute h-[102.22%] w-[100.57%] top-[-1.11%] right-[-0.29%] bottom-[-1.11%] left-[-0.29%] rounded bg-white box-border border-[1px] border-solid border-steelblue-200" />
          <b className="absolute top-[calc(50%_-_10.5px)] left-[44%]">No</b>
        </div>
        <div className="absolute h-[34.35%] w-[46.05%] top-[55.73%] right-[2.63%] bottom-[9.92%] left-[51.32%] text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue-200" />
            <b className="absolute top-[calc(50%_-_11.5px)] left-[41.71%]">
              Yes
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
