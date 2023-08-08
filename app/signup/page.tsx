import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const SignUp: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-left text-xs text-darkslategray-700 font-poppins">
      <div className="absolute top-[0px] left-[960px] bg-white w-[960px] h-[1080px]" />
      <div className="absolute top-[204px] left-[1260px] w-[363px] h-[650px] overflow-hidden">
        <div className="absolute h-[5.85%] w-[47.38%] top-[0%] right-[26.72%] bottom-[94.15%] left-[25.9%]">
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
        <div className="absolute h-[10.77%] w-[48.21%] top-[30.15%] right-[51.79%] bottom-[59.08%] left-[0%] overflow-hidden">
          <div className="absolute h-[101.43%] w-[100.57%] top-[-0.71%] right-[-0.29%] bottom-[-0.71%] left-[-0.29%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
          <div className="absolute top-[calc(50%_-_23px)] left-[8%] opacity-[0.4] mix-blend-normal">
            First Name
          </div>
          <b className="absolute top-[calc(50%_+_5px)] left-[8%] text-sm">
            John
          </b>
        </div>
        <div className="absolute h-[10.77%] w-[48.21%] top-[30.15%] right-[0.83%] bottom-[59.08%] left-[50.96%] overflow-hidden">
          <div className="absolute h-[101.43%] w-[100.57%] top-[-0.71%] right-[-0.29%] bottom-[-0.71%] left-[-0.29%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
          <div className="absolute top-[calc(50%_-_23px)] left-[8%] opacity-[0.4] mix-blend-normal">
            Last Name
          </div>
          <b className="absolute top-[calc(50%_+_5px)] left-[8%] text-sm">
            Smith
          </b>
        </div>
        <div className="absolute h-[10.77%] w-[99.17%] top-[56.62%] right-[0.83%] bottom-[32.62%] left-[0%] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
            <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
            <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
              Password
            </div>
            <b className="absolute top-[calc(50%_+_7px)] left-[3.89%] text-sm">
              *************
            </b>
          </div>
          <div className="absolute top-[calc(50%_+_8px)] left-[92.22%] text-base font-material-icons">
            
          </div>
        </div>
        <div className="absolute h-[10.77%] w-[99.17%] top-[69.85%] right-[0.83%] bottom-[19.38%] left-[0%] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
            <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
            <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
              Confirm Password
            </div>
            <b className="absolute top-[calc(50%_+_7px)] left-[3.89%] text-sm">
              *************
            </b>
          </div>
          <div className="absolute top-[calc(50%_+_8px)] left-[92.22%] text-base font-material-icons">
            
          </div>
        </div>
        <div className="absolute h-[6.92%] w-[99.17%] top-[93.08%] right-[0.83%] bottom-[0%] left-[0%] text-center text-base text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue-200" />
            <b className="absolute top-[calc(50%_-_11.5px)] left-[26.25%] text-black">
              <Link href="/welcome">Create Your Account</Link>
            </b>
          </div>
        </div>
        <div className="absolute top-[calc(50%_-_267px)] left-[41.6%] text-base font-semibold text-darkslategray-100">
          Sign Up
        </div>
        <div className="absolute h-[10.77%] w-[99.17%] top-[43.38%] right-[0.55%] bottom-[45.85%] left-[0.28%] overflow-hidden">
          <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
          <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
            Email
          </div>
          <b className="absolute top-[calc(50%_+_4px)] left-[3.89%] text-sm">
            johnsmith@gmail.com
          </b>
        </div>
        <div className="absolute h-[6.15%] w-[99.72%] top-[83.08%] right-[0%] bottom-[10.77%] left-[0.28%] overflow-hidden text-sm text-darkgray-200">
          <div className="absolute top-[calc(50%_-_20px)] left-[8.29%]">
            <p className="m-0">{`I have read and agree to StaffMerge’s `}</p>
            <p className="m-0 text-steelblue-200">
              <span className="[text-decoration:underline] text-steelblue-100">
                Privacy
              </span>
              <span className="text-darkgray-200">{` `}</span>
              <span>
                <span className="[text-decoration:underline]">Policy</span>
                {`, `}
                <span className="[text-decoration:underline]">
                  Terms of Use
                </span>
                {`, and `}
                <span className="[text-decoration:underline]">
                  Cookies Policy.
                </span>
              </span>
            </p>
          </div>
          <div className="absolute h-[52.5%] w-[5.8%] top-[-1.25%] right-[94.34%] bottom-[48.75%] left-[-0.14%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[10.77%] w-[99.17%] top-[16.92%] right-[0.83%] bottom-[72.31%] left-[0%] overflow-hidden">
          <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
          <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
            Your Company Name
          </div>
          <b className="absolute top-[calc(50%_+_5px)] left-[3.89%] text-sm">
            Premier Coast Realty
          </b>
        </div>
      </div>
      <div className="absolute top-[888px] left-[1260px] w-[360px] h-[142px] text-center text-mini text-steelblue-200">
        <div className="absolute top-[0px] left-[0px] w-[360px] h-[79px] overflow-hidden">
          <div className="absolute h-[56.96%] w-full top-[43.04%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded [background:linear-gradient(180deg,_#00bbe7,_#0086ca)] hidden" />
            <b className="absolute top-[calc(50%_-_9.5px)] left-[43.89%] cursor-pointer">
              <Link href="/signin">Sign in</Link>
            </b>
          </div>
          <div className="absolute top-[calc(50%_-_39.5px)] left-[24.58%] text-sm leading-[40px] text-darkslategray-100">
            Already have an account?
          </div>
        </div>
        <div className="absolute top-[125px] left-[112px] w-[137px] h-[17px] overflow-hidden text-xs text-darkslategray-100">
          <div className="absolute top-[calc(50%_-_8.5px)] left-[0%]">
            © 2020 StaffMerge, Inc.
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
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
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

export default SignUp;
