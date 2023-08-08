import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link"

const VerifyEmail: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-left text-base text-darkslategray-100 font-poppins">
      <div className="absolute top-[0px] left-[960px] w-[960px] h-[1080px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[960px] h-[1080px]" />
        <div className="absolute top-[417px] left-[352px] w-[257px] h-[246px] overflow-hidden">
          <div className="absolute h-[15.45%] w-[66.93%] top-[0%] right-[16.73%] bottom-[84.55%] left-[16.34%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <Image
                className="absolute top-[0%] right-[0.19%] bottom-[1.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                width={172}
                height={38}
                alt=""
                src="/staffmerge-final-v201@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_47px)] left-[31.13%] font-semibold">
            Verify Email
          </div>
          <div className="absolute h-[44.31%] w-full top-[55.69%] right-[0%] bottom-[0%] left-[0%] overflow-hidden text-center text-sm text-darkslategray-700">
            <div className="absolute top-[calc(50%_-_54.5px)] left-[0.39%] leading-[30px]">
              <p className="m-0">{`We have sent a verification email to `}</p>
              <p className="m-0 text-steelblue-200">
                <b>Johnsmith@gmail.com</b>
              </p>
            </div>
            <div className="absolute top-[calc(50%_+_24.5px)] left-[0%] leading-[30px]">
              Please verify your email to continue…
            </div>
          </div>
        </div>
        <div className="absolute top-[888px] left-[300px] w-[360px] h-[142px] text-center text-mini text-steelblue-200">
          <div className="absolute top-[0px] left-[0px] w-[360px] h-[79px] overflow-hidden">
            <div className="absolute h-[56.96%] w-full top-[43.04%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded [background:linear-gradient(180deg,_#00bbe7,_#0086ca)] hidden" />
              <b className="absolute top-[calc(50%_-_9.5px)] left-[23.75%]">
                Resend Verification Email
              </b>
            </div>
            <div className="absolute top-[calc(50%_-_39.5px)] left-[19.03%] text-sm leading-[40px] text-darkslategray-100">
              Didnt Get the Verification Email?
            </div>

          </div>
          <div className="absolute top-[125px] left-[112px] w-[137px] h-[17px] overflow-hidden text-xs text-darkslategray-100">
            <div className="absolute top-[calc(50%_-_8.5px)] left-[0%]">
              © 2020 StaffMerge, Inc.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[286px] left-[395px] w-[467px] h-[246px] overflow-hidden hidden text-center text-sm text-darkslategray-500">
        <b className="absolute top-[calc(50%_-_123px)] left-[0%] text-53xl leading-[83px] text-left">
          <p className="m-0">Connect.</p>
          <p className="m-0">Merge. Work</p>
        </b>
        <div className="absolute h-[20.33%] w-[25.7%] top-[79.67%] right-[74.3%] bottom-[0%] left-[0%] overflow-hidden">
          <div className="absolute h-[102%] w-[100.83%] top-[-1%] right-[-0.42%] bottom-[-1%] left-[-0.42%] rounded-6xl box-border border-[1px] border-solid border-darkslategray-500" />
          <div className="absolute top-[calc(50%_-_10px)] left-[25%] font-medium">
            Post Job
          </div>
        </div>
        <div className="absolute h-[20.33%] w-[25.7%] top-[79.67%] right-[45.18%] bottom-[0%] left-[29.12%] overflow-hidden text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-steelblue-200" />
          <div className="absolute top-[calc(50%_-_10px)] left-[22.5%] font-medium">
            Get Hired
          </div>
        </div>
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

export default VerifyEmail;
