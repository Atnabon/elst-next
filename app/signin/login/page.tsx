import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-left text-xs text-darkslategray-400 font-poppins">
      <div className="absolute top-[0px] left-[960px] w-[960px] h-[1080px]">
        <div className="absolute top-[0px] left-[0px] w-[960px] h-[1080px]">
          <div className="absolute top-[0px] left-[0px] bg-white w-[960px] h-[1080px]" />
          <div className="absolute top-[344px] left-[297px] w-[367px] h-[392px] overflow-hidden">
            <div className="absolute h-[9.69%] w-[46.87%] top-[0%] right-[26.7%] bottom-[90.31%] left-[26.43%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
                <Image
                  className="absolute top-[0%] right-[0.19%] bottom-[1.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                  width={172}
                  height={38}
                  alt=""
                  src="/staffmerge-final-v2012@2x.png"
                />
              </div>
            </div>
            <div className="absolute h-[17.86%] w-[98.09%] top-[27.55%] right-[1.09%] bottom-[54.59%] left-[0.82%] overflow-hidden">
              <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
                Username
              </div>
              <b className="absolute top-[calc(50%_+_5px)] left-[3.89%] text-sm">
                John Smith
              </b>
            </div>
            <div className="absolute h-[17.86%] w-[98.09%] top-[49.49%] right-[1.09%] bottom-[32.65%] left-[0.82%] overflow-hidden">
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
            <div className="absolute h-[11.48%] w-[98.09%] top-[88.52%] right-[1.09%] bottom-[0%] left-[0.82%] text-center text-base text-white">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue-500" />
                <b className="absolute top-[calc(50%_-_11.5px)] left-[43.33%] text-black">
                  <Link href="/welcome">Log in</Link>
                </b>
              </div>
            </div>
            <div className="absolute h-[5.36%] w-full top-[75.51%] right-[0%] bottom-[19.13%] left-[0%] text-mini text-steelblue-500">
              <div className="absolute h-full w-[37.33%] top-[0%] right-[62.67%] bottom-[0%] left-[0%] overflow-hidden">
                <b className="absolute top-[calc(50%_-_10.5px)] left-[0%] [text-decoration:underline]">
                  Forgot Password?
                </b>
              </div>
              <div className="absolute h-full w-[37.06%] top-[0%] right-[0%] bottom-[0%] left-[62.94%] text-right text-lightsteelblue">
                <div className="absolute h-full w-[15.44%] top-[-2.38%] right-[84.93%] bottom-[2.38%] left-[-0.37%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
                <div className="absolute h-full w-[80.88%] top-[0%] right-[0%] bottom-[0%] left-[19.12%] overflow-hidden">
                  <b className="absolute top-[calc(50%_-_10.5px)] left-[0%]">
                    Stay Signed in
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_135px)] left-[43.32%] text-base font-semibold text-darkslategray-100">
              Log In
            </div>
          </div>
        </div>
        <div className="absolute top-[888px] left-[300px] w-[360px] h-[142px] text-center text-mini text-steelblue-500">
          <div className="absolute top-[0px] left-[0px] w-[360px] h-[79px] overflow-hidden">
            <div className="absolute h-[56.96%] w-full top-[43.04%] right-[0%] bottom-[0%] left-[0%] overflow-hidden">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded [background:linear-gradient(180deg,_#00bbe7,_#0086ca)] hidden" />
              <b className="absolute top-[calc(50%_-_9.5px)] left-[43.06%]">
                <Link href="/signup">Sign Up</Link>
              </b>
            </div>
            <div className="absolute top-[calc(50%_-_39.5px)] left-[26.94%] text-sm leading-[40px] text-darkslategray-100">
              Don’t have an account?
            </div>
          </div>
          <div className="absolute top-[125px] left-[112px] w-[137px] h-[17px] overflow-hidden text-xs text-darkslategray-100">
            <div className="absolute top-[calc(50%_-_8.5px)] left-[0%]">
              © 2020 StaffMerge, Inc.
            </div>
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

export default Login;
