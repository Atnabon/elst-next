import type { NextPage } from "next";
import Image from "next/image";

const Reset: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-left text-base text-white font-poppins">
      <div className="absolute top-[0px] left-[960px] w-[960px] h-[1080px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[960px] h-[1080px]" />
        <div className="absolute top-[408px] left-[300px] w-[370px] h-[265px] overflow-hidden">
          <div className="absolute h-[14.34%] w-[46.49%] top-[0%] right-[28.11%] bottom-[85.66%] left-[25.41%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <Image
                className="absolute  top-[0%] right-[0.19%] bottom-[1.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                width={172}
                height={38}
                alt=""
                src="/staffmerge-final-v201@2x.png"
              />
            </div>
          </div>
          <div className="absolute h-[16.98%] w-[97.3%] top-[83.02%] right-[2.7%] bottom-[0%] left-[0%] text-center">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue" />
              <b className="absolute top-[calc(50%_-_11.5px)] left-[31.94%] text-black">
                Reset Password
              </b>
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_56.5px)] left-[0.27%] font-semibold text-darkslategray-100 text-black">
            Forget password?
          </div>
          <div className="absolute h-[36.6%] w-full top-[41.89%] right-[0%] bottom-[21.51%] left-[0%] overflow-hidden text-xs text-darkslategray-700">
            <div className="absolute h-[73.2%] w-[100.27%] top-[-0.52%] right-[-0.14%] bottom-[27.32%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
            <div className="absolute top-[calc(50%_-_36.5px)] left-[3.78%] opacity-[0.4] mix-blend-normal">
              Enter your email to reset password
            </div>
            <div className="absolute top-[calc(50%_+_31.5px)] left-[3.78%] opacity-[0.4] mix-blend-normal">
              We will send an email to reset your password.
            </div>
            <b className="absolute top-[calc(50%_-_8.5px)] left-[3.78%] text-sm text-black">
              Johnsmith@gmail.com
            </b>
          </div>
        </div>
        <div className="absolute top-[888px] left-[300px] w-[360px] h-[142px] text-center text-mini text-steelblue">
          <div className="absolute top-[0px] left-[0px] w-[360px] h-[79px] overflow-hidden">
            <div className="absolute h-[56.96%] w-full top-[43.04%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded [background:linear-gradient(180deg,_#00bbe7,_#0086ca)] hidden" />
              <b className="absolute top-[calc(50%_-_9.5px)] left-[36.25%] text-black">
                Resend Again
              </b>
            </div>
            <div className="absolute top-[calc(50%_-_39.5px)] left-[11.67%] text-sm leading-[40px] text-darkslategray-100">
              Didnt Received the reset password link?
            </div>
          </div>
          <div className="absolute top-[125px] left-[112px] w-[137px] h-[17px] overflow-hidden text-xs text-darkslategray-100">
            <div className="absolute top-[calc(50%_-_8.5px)] left-[0%]">
              © 2020 StaffMerge, Inc.
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[960px] h-[1080px] overflow-hidden text-left text-[42px]">
        <Image
          className="absolute  top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
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

export default Reset;
