import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const SignIn: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-center text-sm text-gray font-poppins">
      <div className="absolute top-[0px] left-[960px] w-[960px] h-[1080px]">
        <div className="absolute top-[0px] left-[0px] bg-white w-[960px] h-[1080px]" />
        <div className="absolute top-[388px] left-[300px] w-[360px] h-[642px]">
          <div className="absolute top-[0px] left-[0px] w-[360px] h-[304px]">
            <div className="absolute top-[0px] left-[94px] w-[172px] h-[38px]">
              <div className="absolute top-[0px] left-[0px] w-[172px] h-[38px]">
                <Image
                  className="absolute top-[0px] left-[0px] object-cover"
                  width={171.68}
                  height={37.26}
                  alt=""
                  src="/staffmerge-final-v201@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[114px] left-[0px] w-[360px] h-[50px] overflow-hidden text-steelblue">
              <div className="absolute h-[102%] w-[100.28%] top-[-1%] right-[-0.14%] bottom-[-1%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-lightblue" />
              <div className="absolute top-[calc(50%_-_10px)] left-[33.61%] font-semibold">
                <Link href="signin/login">Log in with Email</Link>
              </div>
            </div>
            <div className="absolute top-[184px] left-[0px] w-[360px] h-[50px]">
              <div className="absolute top-[-0.5px] left-[-0.5px] rounded bg-white box-border w-[361px] h-[51px] border-[1px] border-solid border-whitesmoke" />
              <div className="absolute top-[12px] left-[105px] w-36 h-[26px] overflow-hidden">
                <div className="absolute top-[calc(50%_-_10px)] left-[0.35%] font-medium">
                  Log in with
                </div>
                <Image
                  className="absolute top-[0%] right-[0%] bottom-[0%] left-[56.94%] max-w-full overflow-hidden max-h-full object-cover"
                  width={62}
                  height={26}
                  alt=""
                  src="/bitmap3@2x.png"
                />
              </div>
            </div>
            <div className="absolute top-[254px] left-[0px] w-[360px] h-[50px]">
              <div className="absolute top-[0px] left-[0px] w-[360px] h-[50px]">
                <div className="absolute top-[-0.5px] left-[-0.5px] rounded bg-white box-border w-[361px] h-[51px] border-[1px] border-solid border-whitesmoke" />
                <div className="absolute top-[15px] left-[105px] w-[76px] h-5 overflow-hidden">
                  <div className="absolute top-[calc(50%_-_10px)] left-[0.66%] font-medium">
                    Log in with
                  </div>
                </div>
              </div>
              <Image
                className="absolute top-[18px] left-[190px] object-cover"
                width={70}
                height={14}
                alt=""
                src="/bitmap4@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[500px] left-[0px] w-[360px] h-[142px] text-[15px] text-steelblue">
            <div className="absolute top-[0px] left-[0px] w-[360px] h-[79px] overflow-hidden">
              <div className="absolute h-[56.96%] w-full top-[43.04%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded [background:linear-gradient(180deg,_#00bbe7,_#0086ca)] hidden" />
                <b className="absolute top-[calc(50%_-_9.5px)] left-[43.06%] cursor-default">
                  <Link href="/signup">Sign Up</Link>
                </b>
              </div>
              <div className="absolute top-[calc(50%_-_39.5px)] left-[26.94%] text-sm leading-[40px] text-darkslategray">
                Don’t have an account?
              </div>
            </div>
            <div className="absolute top-[125px] left-[112px] w-[137px] h-[17px] overflow-hidden text-[12px] text-darkslategray">
              <div className="absolute top-[calc(50%_-_8.5px)] left-[0%]">
                © 2020 StaffMerge, Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[960px] h-[1080px] overflow-hidden text-left text-[42px] text-white">
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

export default SignIn;
