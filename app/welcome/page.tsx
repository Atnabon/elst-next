import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link"

const Welcome: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-center text-base text-darkslategray-100 font-poppins">
      <div className="absolute top-[0px] left-[960px] bg-white w-[960px] h-[1080px]" />
      <div className="absolute top-[1013px] left-[1371px] w-[137px] h-[17px] overflow-hidden text-xs">
        <div className="absolute top-[calc(50%_-_8.5px)] left-[0%]">
          © 2020 StaffMerge, Inc.
        </div>
      </div>
      <b className="absolute top-[398px] left-[1387.5px] text-xl text-steelblue-300">
        Welcome!
      </b>
      <div className="absolute top-[481px] left-[1341px] font-semibold text-left">
        To continue you have to:
      </div>
      <div className="absolute top-[24px] left-[0.5px] w-[1920px] h-[68px] text-left text-sm">
        <Image
          className="absolute top-[67px] left-[-0.5px] opacity-[0.1] mix-blend-normal"
          width={1920}
          height={68}
          alt=""
          src="/line-2.svg"
        />
        <Image
          className="absolute top-[4px] left-[19.5px]  object-cover"
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
      <div className="absolute top-[579px] left-[1260px] w-[360px] h-[45px] text-white">
        <div className="absolute top-[0px] left-[0px] w-[360px] h-[45px] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11.5px)] left-[38.33%] text-black">
            <Link href="/createjob">Post a Job</Link>
          </b>
        </div>
      </div>
      <div className="absolute top-[519px] left-[1262px] w-[360px] h-[45px] overflow-hidden text-mini text-steelblue-200">
        <div className="absolute h-[102.22%] w-[100.28%] top-[-1.11%] right-[-0.14%] bottom-[-1.11%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-steelblue-200" />
        <b className="absolute top-[calc(50%_-_10.5px)] left-[31.67%]">
          <Link href="/"> Go To Homepage</Link>
        </b>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[960px] h-[1080px] overflow-hidden text-left text-[42px] text-white">
        <Image
          className="absolute top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          width={960}
          height={720}
          alt=""
          src="/image@2x.png"
        />
        <b className="absolute top-[calc(50%_-_414px)] left-[19.79%] leading-[83px]">
          Connect. Merge. Work
        </b>
      </div>
    </div>
  );
};

export default Welcome;
