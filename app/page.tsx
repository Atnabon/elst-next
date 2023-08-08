import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[6668px] overflow-hidden text-center text-sm text-darkslategray-500 font-poppins">
      <Image
        className="absolute top-[0px] left-[0px] object-cover w-full"
        width={1944}
        height={850}
        alt=""
        src="/technology-6@2x.png"
      />
      <div className="absolute top-[39px] left-[395px] w-[1160px] h-[50px]">
        <div className="absolute top-[0px] left-[0px] w-[1024px] h-[50px]">
          <Image
            className="absolute top-[6px] left-[0px]  object-cover"
            width={172}
            height={38}
            alt=""
            src="/staffmerge-final-v2011@2x.png"
          />
          <div className="absolute top-[0px] left-[904px] w-[120px] h-[50px] overflow-hidden">
            <div className="absolute h-[102%] w-[100.83%] top-[-1%] right-[-0.42%] bottom-[-1%] left-[-0.42%] rounded-6xl box-border border-[1px] border-solid border-darkslategray-500" />
            <div className="absolute top-[calc(50%_-_10px)] left-[25%] font-medium">
              Post Job
            </div>
          </div>
          <div className="absolute top-[15px] left-[339px] w-[452px] h-5 overflow-hidden text-darkslategray-300">
            <div className="absolute top-[calc(50%_-_10px)] left-[0%]">
              How We Work
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[33.85%]">
              Pricing
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[57.52%]">
              Download
            </div>
            <div className="absolute top-[calc(50%_-_10px)] left-[86.06%]">
              About Us
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[1040px] w-[120px] h-[50px] overflow-hidden text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-steelblue-200" />
          <div className="absolute top-[calc(50%_-_10px)] left-[22.5%] font-medium">
            Get Hired
          </div>
        </div>
      </div>
      <div className="absolute top-[300px] left-[395px] w-[467px] h-[246px] overflow-hidden">
        <b className="absolute top-[calc(50%_-_123px)] left-[0%] text-53xl leading-[83px] text-left">
          <p className="m-0">Connect.</p>
          <p className="m-0">Merge. Work</p>
        </b>
        <div className="absolute h-[20.33%] w-[25.7%] top-[79.67%] right-[74.3%] bottom-[0%] left-[0%] overflow-hidden">
          <div className="absolute h-[102%] w-[100.83%] top-[-1%] right-[-0.42%] bottom-[-1%] left-[-0.42%] rounded-6xl box-border border-[1px] border-solid border-darkslategray-500" />
          <div className="absolute top-[calc(50%_-_10px)] left-[25%] font-medium cursor-pointer">
            <Link href="/signin">
            Post Job
            </Link>
          </div>
        </div>
        <div className="absolute h-[20.33%] w-[25.7%] top-[79.67%] right-[45.18%] bottom-[0%] left-[29.12%] overflow-hidden text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-steelblue-200" />
          <div className="absolute top-[calc(50%_-_10px)] left-[22.5%] font-medium">
            Get Hired
          </div>
        </div>
      </div>
      <div className="absolute top-[273px] left-[395px] text-[26px] font-medium text-steelblue-200 text-left">
        First 90 Days FREE for Employers!
      </div>
      <div className="absolute top-[853px] left-[438px] w-[1077px] h-[188px] text-base text-darkslategray-300">
        <Image
          className="absolute top-[0px] left-[117px] "
          width={41}
          height={40}
          alt=""
          src="/001link.svg"
        />
        <Image
          className="absolute top-[0px] left-[518px] "
          width={40}
          height={40}
          alt=""
          src="/005merge2.svg"
        />
        <Image
          className="absolute top-[2px] left-[917px] "
          width={40}
          height={36}
          alt=""
          src="/006portfolio.svg"
        />
        <div className="absolute top-[59px] left-[0px] w-[275px] h-[129px] overflow-hidden">
          <b className="absolute top-[calc(50%_-_64.5px)] left-[37.45%]">
            Connect
          </b>
          <div className="absolute h-[74.42%] w-full top-[25.58%] left-[0%] text-sm leading-[24px] text-gray-200 inline-block">
          StaffMerge&rsquo;s mission is to CONNECT Employers with Job Seekers in an
            effective and efficient platform, making it easier for both.
          </div>
        </div>
        <div className="absolute top-[59px] left-[401px] w-[275px] h-[129px] overflow-hidden">
          <b className="absolute top-[calc(50%_-_64.5px)] left-[40.55%]">
            Merge
          </b>
          <div className="absolute h-[74.42%] w-full top-[25.58%] left-[0%] text-sm leading-[24px] text-gray-200 inline-block">
            Using Resumes, Video Introductions, Video Interviews, and Direct
            Messages, StaffMerge&rsquo;s platform goal is to MERGE Employers and Job
            Seekers.
          </div>
        </div>
        <div className="absolute top-[59px] left-[802px] w-[275px] h-[109px] overflow-hidden">
          <b className="absolute top-[calc(50%_-_54.5px)] left-[42.18%]">
            Work
          </b>
          <div className="absolute h-[69.72%] w-full top-[30.28%] left-[0%] text-sm leading-[24px] text-gray-200 inline-block">
            After Employers and Job Seekers have connected and merged, now it is
            time to WORK, mutually benefiting both.
          </div>
        </div>
      </div>
      <div className="absolute top-[4289px] left-[0px] w-[1932px] h-[1052px] overflow-hidden text-left text-gray-400">
        <div className="absolute h-full w-[99.38%] top-[0%] right-[0.62%] bottom-[0%] left-[0%] bg-gray-100" />
        <Image
          className="absolute top-[18%] right-[16.01%] bottom-[78.64%] left-[82.16%] rounded-[1.69px] max-w-full overflow-hidden max-h-full opacity-[0.11] mix-blend-normal"
          width={20}
          height={20}
          alt=""
          src="/rectangle-copy-3.svg"
        />
        <Image
          className="absolute top-[57.31%] right-[88.54%] bottom-[36.94%] left-[8.33%] rounded-[2.9px] max-w-full overflow-hidden max-h-full opacity-[0.04] mix-blend-normal"
          width={34}
          height={34}
          alt=""
          src="/rectangle-copy-4.svg"
        />
        <Image
          className="absolute top-[3.94%] right-[91.97%] bottom-[93.2%] left-[6.47%] rounded-[1.45px] max-w-full overflow-hidden max-h-full opacity-[0.63] mix-blend-normal"
          width={16}
          height={16}
          alt=""
          src="/rectangle-copy-5.svg"
        />
        <Image
          className="absolute top-[61.42%] right-[16.75%] bottom-[35.33%] left-[81.48%] rounded-[1.45px] max-w-full overflow-hidden max-h-full opacity-[0.08] mix-blend-normal"
          width={16}
          height={16}
          alt=""
          src="/rectangle-copy-6.svg"
        />
        <div className="absolute h-[5.7%] w-[17.65%] top-[19.01%] right-[41.46%] bottom-[75.29%] left-[40.89%] overflow-hidden text-center text-base text-white">
          <div className="absolute h-full w-[57.18%] top-[0%] right-[42.82%] bottom-[0%] left-[0%] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[30px] bg-darkslategray-400 shadow-[17px_18px_40px_rgba(107,_107,_107,_0.21)]" />
            <b className="absolute top-[calc(50%_-_12px)] left-[16.92%]">
              For Job Seekers
            </b>
          </div>
          <b className="absolute top-[calc(50%_-_12px)] left-[65.69%] text-darkslategray-300">
            For Employers
          </b>
        </div>
        <div className="absolute h-[63.5%] w-[12.89%] top-[30.09%] right-[26.42%] bottom-[6.42%] left-[60.69%] rounded-2xl bg-white box-border border-[1px] border-solid border-whitesmoke-100" />
        <div className="absolute h-[10.55%] w-[12.89%] top-[30.09%] right-[26.42%] bottom-[59.36%] left-[60.69%] rounded-t-2xl rounded-b-none bg-steelblue-200 box-border border-[1px] border-solid border-whitesmoke-100" />
        <b className="absolute top-[calc(50%_-_185px)] left-[64.6%] text-11xl text-white text-center">
          $4.99
        </b>
        <b className="absolute top-[calc(50%_-_183px)] left-[50.72%] text-11xl text-darkgray-100 text-center">
          Free
        </b>
        <div className="absolute top-[calc(50%_-_140px)] left-[65.06%] text-[18px] text-white text-center">
          Per Year
        </div>
        <div className="absolute top-[calc(50%_-_33px)] left-[27.17%] font-semibold">
          Adding Multiple Resumes
        </div>
        <div className="absolute top-[calc(50%_-_75px)] left-[27.17%] font-semibold">
          Professional Resume Builder
        </div>
        <div className="absolute top-[calc(50%_+_10px)] left-[27.17%] font-semibold">
          Resume Export Options
        </div>
        <div className="absolute top-[calc(50%_+_135px)] left-[27.17%] font-semibold">{`Unlimited Video Introductions `}</div>
        <div className="absolute top-[calc(50%_+_261px)] left-[27.17%] font-semibold">{`Direct Messages from Employers `}</div>
        <div className="absolute top-[calc(50%_+_302px)] left-[27.17%] font-semibold">
          Automated Interview Alerts
        </div>
        <div className="absolute top-[calc(50%_+_344px)] left-[27.17%] font-semibold">
          Notifications Alerts
        </div>
        <div className="absolute top-[calc(50%_+_177px)] left-[27.17%] font-semibold">
          Unlimited Interviews
        </div>
        <div className="absolute top-[calc(50%_+_219px)] left-[27.17%] font-semibold">{`Unlimited Applications Submission `}</div>
        <div className="absolute top-[calc(50%_+_93px)] left-[27.17%] font-semibold">
          Advanced Job Search
        </div>
        <div className="absolute top-[calc(50%_+_52px)] left-[27.17%] font-semibold">
          Basic Job Search
        </div>
        <Image className="relative " alt="" 
        width={16}
        height={16}
        src="/shape.svg" />
        <Image className="relative" alt="" 
        width={16}
        height={16}
        src="/shape.svg" />
        <Image className="relative" alt="" 
        width={16}
        height={16}
        src="/shape.svg" />
        <Image className="relative" alt=""
        width={16}
        height={16}
        src="/shape.svg" />
        <Image className="relative" alt=""
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative " alt="" 
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative " alt=""
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative " alt="" 
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative" alt="" 
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative " alt="" 
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative " alt=""
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative " alt="" 
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative " alt="" 
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative " alt="" 
        width={16}
        height={16}
        src="/shape1.svg" />
        <Image className="relative" alt="" 
        width={16}
        height={16}
        src="/shape1.svg" />
        <div className="absolute h-[4.75%] w-[10.09%] top-[86.98%] right-[27.8%] bottom-[8.27%] left-[62.11%] overflow-hidden text-center text-base text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11px)] left-[26.15%]">
            Get Started
          </b>
        </div>
        <div className="absolute h-[4.75%] w-[10.09%] top-[86.98%] right-[42.49%] bottom-[8.27%] left-[47.41%] overflow-hidden text-center text-base text-steelblue-200">
          <div className="absolute h-[102%] w-[100.51%] top-[-1%] right-[-0.26%] bottom-[-1%] left-[-0.26%] rounded-6xl box-border border-[1px] border-solid border-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11px)] left-[26.15%]">
            Get Started
          </b>
        </div>
        <Image
          className="absolute top-[87.28%] right-[0.62%] bottom-[9.86%] left-[98.61%] rounded-[1.45px] max-w-full overflow-hidden max-h-full opacity-[0.63] mix-blend-normal"
          width={16}
          height={16}
          alt=""
          src="/rectangle-copy-7.svg"
        />
        <div className="absolute h-[5.32%] w-[11.85%] top-[7.7%] right-[44.36%] bottom-[86.98%] left-[43.79%] overflow-hidden text-center text-21xl text-darkslategray-300">
          <div className="absolute h-[12.5%] w-[89.52%] top-[69.64%] right-[8.73%] bottom-[17.86%] left-[1.75%] rounded-9xs-5 bg-lightskyblue" />
          <b className="absolute top-[calc(50%_-_28px)] left-[0%]">
            Our Pricing
          </b>
        </div>
      </div>
      <div className="absolute top-[5418px] left-[-785px] w-[2423px] h-[734px] text-base text-white">
        <div className="absolute top-[0px] left-[1180px] w-[1243px] h-[734px] overflow-hidden">
          <div className="absolute h-[82.02%] w-[21.08%] top-[2.72%] right-[6.19%] bottom-[15.26%] left-[72.73%] rounded-[44px] bg-gainsboro-200 [filter:blur(27.18px)] opacity-[0.25] mix-blend-normal" />
          <div className="absolute h-[86.78%] w-[24.14%] top-[0%] right-[-0.32%] bottom-[13.22%] left-[76.19%] [transform:_rotate(10deg)] [transform-origin:0_0] text-51xl font-circular-std">
            <Image
              className="absolute top-[0%] right-[1.52%] bottom-[-6.66%] left-[-36.87%] max-w-full overflow-hidden max-h-full"
              width={300}
              height={637}
              alt=""
              src="/pixel-4-clay-white.svg"
            />
            <div className="absolute h-[90.42%] w-[91%] top-[6.71%] right-[7.55%] bottom-[2.87%] left-[1.45%] [transform:_rotate(10deg)] [transform-origin:0_0]">
              <Image
                className="absolute top-[7.42%] right-[-348.45%] bottom-[-7.27%] left-[348.48%] max-w-full overflow-hidden max-h-full"
                width={272}
                height={575}
                alt=""
                src="/mask.svg"
              />
              <div className="absolute h-[99.85%] w-[99.97%] top-[0%] right-[0.03%] bottom-[0.15%] left-[0%] [transform:_rotate(10deg)] [transform-origin:0_0]">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-white" />
                <b className="absolute w-[59.12%] top-[44.34%] left-[20.51%] inline-block">
                  Paste your design here
                </b>
                <Image
                  className="absolute top-[0.79%] right-[3.17%] bottom-[-5.94%] left-[-34.94%] max-w-full overflow-hidden max-h-full object-cover"
                  width={272}
                  height={590}
                  alt=""
                  src="/12@2x.png"
                />
              </div>
            </div>
          </div>
          <Image
            className="absolute top-[0%] right-[16.11%] bottom-[0%] left-[45.09%] max-w-full overflow-hidden max-h-full object-cover"
            width={364}
            height={670}
            alt=""
            src="/silver@2x.png"
          />
          <div className="absolute h-[7.63%] w-[35.88%] top-[29.7%] right-[64.12%] bottom-[62.67%] left-[0%] overflow-hidden text-left text-21xl text-darkslategray-300">
            <div className="absolute h-[10.71%] w-[97.76%] top-[75%] right-[2.02%] bottom-[14.29%] left-[0.22%] rounded-9xs-5 bg-lightskyblue" />
            <b className="absolute top-[calc(50%_-_28px)] left-[0%]">{`Connect.Merge.Work `}</b>
          </div>
          <div className="absolute h-[6.81%] w-[15.69%] top-[54.09%] right-[84.31%] bottom-[39.1%] left-[0%] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-steelblue-200" />
            <Image
              className="absolute top-[20%] right-[75.9%] bottom-[20%] left-[8.72%] max-w-full overflow-hidden max-h-full"
              width={30}
              height={30}
              alt=""
              src="/appstore-2.svg"
            />
            <b className="absolute top-[calc(50%_-_11px)] left-[35.38%]">
              App Store
            </b>
          </div>
          <div className="absolute h-[6.81%] w-[15.69%] top-[54.09%] right-[67.66%] bottom-[39.1%] left-[16.65%] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-steelblue-200" />
            <Image
              className="absolute top-[24%] right-[78.55%] bottom-[22%] left-[9.23%] max-w-full overflow-hidden max-h-full"
              width={23}
              height={27}
              alt=""
              src="/playstore.svg"
            />
            <b className="absolute top-[calc(50%_-_11px)] left-[28.97%]">
              Play Store
            </b>
          </div>
          <div className="absolute top-[calc(50%_-_22px)] left-[0.16%] text-darkslategray-100 text-left">
            Download Our App now!
          </div>
          <div className="absolute top-[calc(50%_-_57px)] left-[0.16%] font-semibold text-darkslategray-100 text-left">
            We are available in all Platforms.
          </div>
        </div>
        <Image
          className="absolute top-[606.19px] left-[1230.18px] rounded-[1.45px] opacity-[0.12] mix-blend-normal"
          width={16}
          height={16}
          alt=""
          src="/rectangle-copy-8.svg"
        />
        <Image
          className="absolute top-[59px] left-[785px]  object-cover"
          width={1000}
          height={574}
          alt=""
          src="/macbook-pro16in-01clay-white@2x.png"
        />
        <Image
          className="absolute top-[55.94px] left-[837.94px] rounded-[1.45px] opacity-[0.3] mix-blend-normal"
          width={16}
          height={16}
          alt=""
          src="/rectangle-copy-9.svg"
        />
      </div>
      <div className="absolute top-[6213px] left-[0px] w-[1921px] h-[425px] overflow-hidden text-left text-darkslategray-100">
        <Image
          className="absolute top-[0%] right-[0%] bottom-[99.76%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.22] mix-blend-normal"
          width={1921}
          height={1}
          alt=""
          src="/line-211.svg"
        />
        <Image
          className="absolute top-[89.41%] right-[0%] bottom-[10.35%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.22] mix-blend-normal"
          width={1921}
          height={1}
          alt=""
          src="/line-211.svg"
        />
        <div className="absolute h-[55.76%] w-[4.74%] top-[14.12%] right-[74.75%] bottom-[30.12%] left-[20.51%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_81.5px)] left-[1.1%] leading-[40px]">
            <p className="m-0">{`About Us `}</p>
            <p className="m-0">Terms</p>
            <p className="m-0">{`Privacy `}</p>
            <p className="m-0">{`Accessibility `}</p>
            <p className="m-0">{`Disclaimer `}</p>
          </div>
          <b className="absolute top-[calc(50%_-_118.5px)] left-[0%]">
            COMPANY
          </b>
        </div>
        <div className="absolute h-[55.76%] w-[6.66%] top-[14.12%] right-[47.53%] bottom-[30.12%] left-[45.81%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_81.5px)] left-[0%] leading-[40px]">
            <p className="m-0">Search</p>
            <p className="m-0">{`Jobs By Location `}</p>
            <p className="m-0">Job Title</p>
            <p className="m-0">Jobs By Company</p>
            <p className="m-0">{`Jobs By Category `}</p>
          </div>
          <b className="absolute top-[calc(50%_-_118.5px)] left-[0%]">BROWSE</b>
        </div>
        <div className="absolute h-[55.76%] w-[7.81%] top-[14.12%] right-[19.21%] bottom-[30.12%] left-[72.98%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_81.5px)] left-[0%] leading-[40px]">
            <p className="m-0">Customer Support</p>
            <p className="m-0">Company Reviews</p>
            <p className="m-0">Companies We Serve</p>
            <p className="m-0">{`Testimonials `}</p>
            <p className="m-0">{`Share StaffMerge `}</p>
          </div>
          <b className="absolute top-[calc(50%_-_118.5px)] left-[0%]">
            Resources
          </b>
        </div>
        <div className="absolute top-[calc(50%_+_195.5px)] left-[46.43%] text-xs text-center">
          © 2020 StaffMerge, Inc.
        </div>
        <Image
          className="absolute top-[72.24%] right-[18.79%] bottom-[20.71%] left-[72.98%] max-w-full overflow-hidden max-h-full"
          width={158}
          height={30}
          alt=""
          src="/group-11.svg"
        />
      </div>
      <Image
        className="absolute top-[1084px] left-[363px]  object-cover"
        width={1156}
        height={650}
        alt=""
        src="/video1@2x.png"
      />
      <Image
        className="absolute top-[2572.56px] left-[637.5px] "
        width={693}
        height={1774}
        alt=""
        src="/path-2.svg"
      />
      <Image
        className="absolute top-[1379px] left-[911px] w-[138px] h-[138px]"
        width={60}
        height={60}
        alt=""
        src="/play.svg"
      />
      <div className="absolute top-[1941px] left-[412px] w-[1097px] h-[670px] text-left text-[8.75px] text-darkslategray-100">
        <div className="absolute top-[224px] left-[0px] w-[425px] h-28 overflow-hidden text-21xl text-darkslategray-300">
          <div className="absolute h-[6.25%] w-[98.82%] top-[46.43%] right-[0%] bottom-[47.32%] left-[1.18%] rounded-9xs-5 bg-lightskyblue" />
          <b className="absolute top-[calc(50%_-_56px)] left-[0%]">
            <p className="m-0 ">Qualified Applicants</p>
          </b>
        </div>
        <Image
          className="absolute top-[0px] left-[696px]  object-cover"
          width={364}
          height={670}
          alt=""
          src="/silver1@2x.png"
        />
        <div className="absolute top-[400px] left-[771px] w-[260px] h-[202px]">
          <div className="absolute top-[0px] left-[0px] w-[260px] h-[202px] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden text-[9.48px]">
              <div className="absolute h-[99.87%] w-[100.28%] top-[-0.17%] right-[-0.14%] bottom-[0.31%] left-[-0.14%] rounded-17xl bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
              <div className="absolute top-[calc(50%_-_25.82px)] left-[21.67%]">
                <p className="m-0">{`Had 5 years of working experience as `}</p>
                <p className="m-0">
                  design lead. Working for a reputated com..
                </p>
              </div>
              <div className="absolute h-[7.43%] w-[35.77%] top-[27.47%] right-[42.56%] bottom-[65.1%] left-[21.67%] overflow-hidden text-[10.21px] text-steelblue-200">
                <b className="absolute top-[calc(50%_-_7.5px)] left-[0%]">
                  Dusana Semenov
                </b>
              </div>
            </div>
            <div className="absolute h-[22.77%] w-9/12 top-[72.28%] right-[17.69%] bottom-[4.95%] left-[7.31%] overflow-hidden">
              <b className="absolute top-[calc(50%_-_23px)] left-[0%]">
                Skills
              </b>
              <div className="absolute h-[56.52%] w-[26.67%] top-[42.79%] right-[73.33%] bottom-[0.69%] left-[0%] overflow-hidden">
                <div className="absolute h-[100.93%] w-[99.53%] top-[-1.4%] right-[1.17%] bottom-[0.47%] left-[-0.7%] rounded-[12.76px] bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_6.44px)] left-[21.03%]">
                  Sketch
                </div>
              </div>
              <div className="absolute h-[56.52%] w-[29.23%] top-[42.79%] right-[40.86%] bottom-[0.69%] left-[29.91%] overflow-hidden">
                <div className="absolute h-[100.93%] w-[101.03%] top-[-1.4%] right-[-0.39%] bottom-[0.47%] left-[-0.64%] rounded-[12.76px] bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_6.44px)] left-[19.18%]">
                  Indesign
                </div>
              </div>
              <div className="absolute h-[56.52%] w-[36.92%] top-[42.79%] right-[0.28%] bottom-[0.69%] left-[62.8%] overflow-hidden">
                <div className="absolute h-[100.93%] w-[100.23%] top-[-1.4%] right-[0.28%] bottom-[0.47%] left-[-0.51%] rounded-[12.76px] bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_6.44px)] left-[15.19%]">
                  Adobe Suite
                </div>
              </div>
            </div>
            <Image
              className="absolute top-[68.61%] right-[0.39%] bottom-[31.03%] left-[0.64%] max-w-full overflow-hidden max-h-full opacity-[0.2] mix-blend-normal"
              width={352}
              height={0}
              alt=""
              src="/line.svg"
            />
            <div className="absolute h-[10.89%] w-[8.46%] top-[26.25%] right-[3.63%] bottom-[62.86%] left-[87.91%] overflow-hidden text-[14.58px] text-white font-material-icons">
              <div className="absolute h-[99.4%] w-[99.4%] top-[0%] right-[0.6%] bottom-[0.6%] left-[0%] rounded-[50%] bg-steelblue-200" />
              <div className="absolute top-[calc(50%_+_7.22px)] left-[23.19%] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                
              </div>
            </div>
            <div className="absolute top-[calc(50%_+_18.64px)] left-[4.1%]">
              Location -
            </div>
            <div className="absolute top-[calc(50%_+_18.64px)] left-[42.79%]">
              Type -
            </div>
            <b className="absolute top-[calc(50%_+_18.64px)] left-[54.01%]">
              {" "}
              Remote
            </b>
            <b className="absolute top-[calc(50%_+_18.64px)] left-[22.61%] text-darkslategray-500">
              NY
            </b>
          </div>
          <Image
            className="absolute top-[58px] left-[6px]  object-cover"
            width={44}
            height={44}
            alt=""
            src="/bitmap@2x.png"
          />
        </div>
        <div className="absolute top-[112px] left-[771px] w-[260px] h-[164px]">
          <div className="absolute top-[0px] left-[0px] w-[260px] h-[164px] overflow-hidden">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden text-[9.48px]">
              <div className="absolute h-[99.83%] w-[100.28%] top-[-0.21%] right-[-0.14%] bottom-[0.38%] left-[-0.14%] rounded-17xl bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
              <div className="absolute top-[calc(50%_-_44.82px)] left-[21.67%]">
                <p className="m-0">{`Had 5 years of working experience as `}</p>
                <p className="m-0">
                  design lead. Working for a reputated com..
                </p>
              </div>
              <div className="absolute h-[9.15%] w-[33.85%] top-[10.67%] right-[44.49%] bottom-[80.19%] left-[21.67%] overflow-hidden text-[10.21px] text-steelblue-200">
                <b className="absolute top-[calc(50%_-_7.5px)] left-[0%]">
                  Phakamile Sikali
                </b>
              </div>
            </div>
            <div className="absolute h-[28.05%] w-9/12 top-[65.85%] right-[17.69%] bottom-[6.1%] left-[7.31%] overflow-hidden">
              <b className="absolute top-[calc(50%_-_23px)] left-[0%]">
                Skills
              </b>
              <div className="absolute h-[56.52%] w-[26.67%] top-[42.79%] right-[73.33%] bottom-[0.69%] left-[0%] overflow-hidden">
                <div className="absolute h-[100.93%] w-[99.53%] top-[-1.4%] right-[1.17%] bottom-[0.47%] left-[-0.7%] rounded-[12.76px] bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_6.44px)] left-[21.03%]">
                  Sketch
                </div>
              </div>
              <div className="absolute h-[56.52%] w-[29.23%] top-[42.79%] right-[40.86%] bottom-[0.69%] left-[29.91%] overflow-hidden">
                <div className="absolute h-[100.93%] w-[101.03%] top-[-1.4%] right-[-0.39%] bottom-[0.47%] left-[-0.64%] rounded-[12.76px] bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_6.44px)] left-[19.18%]">
                  Indesign
                </div>
              </div>
              <div className="absolute h-[56.52%] w-[36.92%] top-[42.79%] right-[0.28%] bottom-[0.69%] left-[62.8%] overflow-hidden">
                <div className="absolute h-[100.93%] w-[100.23%] top-[-1.4%] right-[0.28%] bottom-[0.47%] left-[-0.51%] rounded-[12.76px] bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
                <div className="absolute top-[calc(50%_-_6.44px)] left-[15.19%]">
                  Adobe Suite
                </div>
              </div>
            </div>
            <Image
              className="absolute top-[61.34%] right-[0.39%] bottom-[38.22%] left-[0.64%] max-w-full overflow-hidden max-h-full opacity-[0.2] mix-blend-normal"
              width={257}
              height={0.73}
              alt=""
              src="/line.svg"
            />
            <div className="absolute h-[13.41%] w-[8.46%] top-[9.16%] right-[3.63%] bottom-[77.43%] left-[87.91%] overflow-hidden text-[14.58px] text-white font-material-icons">
              <div className="absolute h-[99.4%] w-[99.4%] top-[0%] right-[0.6%] bottom-[0.6%] left-[0%] rounded-[50%] bg-steelblue-200" />
              <div className="absolute top-[calc(50%_+_7.22px)] left-[23.19%] [transform:_rotate(-90deg)] [transform-origin:0_0]">
                
              </div>
            </div>
            <div className="absolute top-[calc(50%_-_0.36px)] left-[4.1%]">
              Location -
            </div>
            <div className="absolute top-[calc(50%_-_0.36px)] left-[42.79%]">
              Type -
            </div>
            <b className="absolute top-[calc(50%_-_0.36px)] left-[54.01%]">
              {" "}
              Remote
            </b>
            <b className="absolute top-[calc(50%_-_0.36px)] left-[22.61%] text-darkslategray-500">
              NY
            </b>
          </div>
          <Image
            className="absolute top-[20px] left-[6px]  object-cover"
            width={60}
            height={60}
            alt=""
            src="/bitmap1@2x.png"
          />
        </div>
        <div className="absolute top-[223px] left-[717px] w-[380px] h-[225px] overflow-hidden text-xs">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] overflow-hidden text-[13px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-white shadow-[20px_22px_39px_rgba(111,_111,_111,_0.19)]" />
            <div className="absolute top-[calc(50%_-_61.5px)] left-[23.95%]">
              <p className="m-0">{`Had 5 years of working experience as `}</p>
              <p className="m-0">design lead. Working for a reputated com..</p>
            </div>
            <div className="absolute h-[8.89%] w-[26.32%] top-[10.67%] right-[49.74%] bottom-[80.44%] left-[23.95%] overflow-hidden text-sm text-steelblue-200">
              <b className="absolute top-[calc(50%_-_10px)] left-[0%]">
                Steve Morgan
              </b>
            </div>
            <Image
              className="absolute h-[26.67%] w-[15.79%] top-[8.89%] right-[80.53%] bottom-[64.44%] left-[3.68%] max-w-full overflow-hidden max-h-full object-cover"
              width={44}
              height={44}
              alt=""
              src="/bitmap2@2x.png"
            />
          </div>
          <div className="absolute h-[27.56%] w-[70%] top-[65.33%] right-[25.79%] bottom-[7.11%] left-[4.21%] overflow-hidden">
            <b className="absolute top-[calc(50%_-_31px)] left-[0%]">Skills</b>
            <div className="absolute h-[56.45%] w-[26.32%] top-[43.55%] right-[73.68%] bottom-[0%] left-[0%] overflow-hidden text-white">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-mid-5 bg-steelblue-200" />
              <div className="absolute top-[calc(50%_-_8.5px)] left-[21.43%]">
                Sketch
              </div>
            </div>
            <div className="absolute h-[56.45%] w-[29.32%] top-[43.55%] right-[40.6%] bottom-[0%] left-[30.08%] overflow-hidden">
              <div className="absolute h-[102.86%] w-[101.28%] top-[-1.43%] right-[-0.64%] bottom-[-1.43%] left-[-0.64%] rounded-mid-5 bg-white box-border border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[calc(50%_-_8.5px)] left-[19.23%]">
                Indesign
              </div>
            </div>
            <div className="absolute h-[56.45%] w-[36.84%] top-[43.55%] right-[0%] bottom-[0%] left-[63.16%] overflow-hidden">
              <div className="absolute h-[102.86%] w-[101.02%] top-[-1.43%] right-[-0.51%] bottom-[-1.43%] left-[-0.51%] rounded-mid-5 bg-white box-border border-[1px] border-solid border-gainsboro-100" />
              <div className="absolute top-[calc(50%_-_8.5px)] left-[15.31%]">
                Adobe Suite
              </div>
            </div>
          </div>
          <Image
            className="absolute top-[61.33%] right-[2.89%] bottom-[38.22%] left-[4.21%] max-w-full overflow-hidden max-h-full opacity-[0.2] mix-blend-normal"
            width={257}
            height={0.73}
            alt=""
            src="/line1.svg"
          />
          <div className="absolute h-[13.33%] w-[7.89%] top-[4.89%] right-[2.37%] bottom-[81.78%] left-[89.74%] rounded-[50%] bg-steelblue-200" />
          <div className="absolute w-[5.48%] top-[calc(50%_-_76.5px)] left-[91.58%] text-xl font-material-icons text-white inline-block [transform:_rotate(-90deg)] [transform-origin:0_0]">
            
          </div>
          <div className="absolute w-[16.19%] top-[calc(50%_-_0.5px)] left-[4.21%] inline-block">
            Location -
          </div>
          <div className="absolute w-[10.24%] top-[calc(50%_-_0.5px)] left-[40.53%] inline-block">
            Type -
          </div>
          <b className="absolute w-[13.33%] top-[calc(50%_-_0.5px)] left-[51.05%] inline-block">
            {" "}
            Remote
          </b>
          <b className="absolute w-[10.26%] top-[calc(50%_-_0.5px)] left-[21.58%] inline-block text-darkslategray-500">
            India
          </b>
        </div>
        <div className="absolute top-[310px] left-[0px] w-[195px] h-[50px] overflow-hidden text-center text-base text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11px)] left-[26.15%]">
            Get Started
          </b>
        </div>
        <Image
          className="absolute top-[53px] left-[821px] object-cover"
          width={172}
          height={38}
          alt=""
          src="/staffmerge-final-v2011@2x.png"
        />
      </div>
      <div className="absolute top-[3556px] left-[431px] w-[1040px] h-[596px] text-21xl text-white">
        <div className="absolute top-[173px] left-[0px] w-[358px] h-[115px] overflow-hidden text-left text-darkslategray-300">
          <div className="absolute h-[6.09%] w-[97.49%] top-[93.91%] right-[2.51%] bottom-[0%] left-[0%] rounded-9xs-5 bg-lightskyblue" />
          <b className="absolute top-[calc(50%_-_57.5px)] left-[0%]">
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Video Interviews!</p>
          </b>
        </div>
        <div className="absolute top-[0px] left-[763px] w-[277px] h-[596px] text-[10.82px]">
          <Image
            className="absolute top-[3556px] left-[1127px] rounded-[31.05px] hidden opacity-[0.3] mix-blend-normal"
            width={359.9}
            height={654}
            alt=""
            src="/shadow.svg"
          />
          <Image
            className="absolute top-[3665.95px] left-[1176.51px] hidden"
            width={313}
            height={115}
            alt=""
            src="/buttons.svg"
          />
          <Image
            className="absolute top-[3541px] left-[1179.46px] rounded-[51.76px] hidden"
            width={307}
            height={630}
            alt=""
            src="/body.svg"
          />
          <div className="absolute top-[0px] left-[0px] w-[277px] h-[596px]">
            <div className="absolute top-[0px] left-[0px] w-[277px] h-[596px]">
              <Image
                className="absolute top-[0px] left-[0px] rounded-[36.97px] "
                width={277}
                height={596}
                alt=""
                src="/mask1.svg"
              />
              <div className="absolute top-[87px] left-[-2px] w-[280px] h-[606px]">
                <Image
                  className="absolute top-[0px] left-[2px] object-cover"
                  width={280}
                  height={606}
                  alt=""
                  src="/juricakoletic7yvzyzeitc8unsplash-1@2x.png"
                />
                <Image
                  className="absolute top-[3px] left-[151px] object-cover"
                  width={91}
                  height={133}
                  alt=""
                  src="/fotosushi6anudmpilw4unsplash@2x.png"
                />
                <div className="absolute top-[456.74px] left-[14.88px] w-[251px] h-[31px]">
                  <div className="absolute top-[0px] left-[0px] w-[251px] h-[31px]">
                    <div className="absolute top-[0px] left-[0px] w-[251px] h-[31px] overflow-hidden">
                      <div className="absolute h-[98.18%] w-[99.7%] top-[0%] right-[0.3%] bottom-[1.82%] left-[0%] rounded-lg [background:linear-gradient(180deg,_#fc6b78,_#e5576c)]" />
                      <b className="absolute top-[calc(50%_-_8.06px)] left-[35.04%]">
                        End Interview
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="absolute top-[3556px] left-[1194px] hidden"
              width={277}
              height={596}
              alt=""
              src="/screen.svg"
            />
            <Image
              className="absolute top-[0px] left-[0px] rounded-[36.97px] "
              width={36}
              height={277}
              alt=""
              src="/frame.svg"
            />
          </div>
        </div>
        <div className="absolute top-[313px] left-[0px] w-[195px] h-[50px] overflow-hidden text-base">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11px)] left-[26.15%]">
            Get Started
          </b>
        </div>
        <Image
          className="absolute top-[32px] left-[818px]  object-cover"
          width={172}
          height={38}
          alt=""
          src="/staffmerge-final-v2011@2x.png"
        />
      </div>
      <div className="absolute top-[2975px] left-[1118px] w-[406px] h-[168px] text-left text-21xl text-darkslategray-300">
        <div className="absolute top-[0px] left-[0px] w-[406px] h-[168px] overflow-hidden">
          <div className="absolute h-[4.17%] w-[98.52%] top-[25%] right-[1.48%] bottom-[70.83%] left-[0%] rounded-9xs-5 bg-lightskyblue" />
          <b className="absolute top-[calc(50%_-_84px)] left-[0%]">
            <p className="m-0">Video Introductions</p>
            <p className="m-0">&nbsp;</p>
          </b>
        </div>
        <div className="absolute top-[83px] left-[0px] w-[195px] h-[50px] overflow-hidden text-center text-base text-white">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-6xl bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11px)] left-[26.15%]">
            Get Started
          </b>
        </div>
      </div>
      <div className="absolute top-[2741px] left-[427px] w-[364px] h-[670px] overflow-hidden text-[10.45px] text-gold font-sf-compact-display">
        <div className="absolute h-[88.96%] w-[76.1%] top-[2.99%] right-[5.97%] bottom-[8.06%] left-[17.93%]">
          <Image
            className="absolute top-[2.52%] right-[-29.93%] bottom-[-12.31%] left-[0%] rounded-[31.05px] max-w-full overflow-hidden max-h-full hidden opacity-[0.3] mix-blend-normal"
            width={360}
            height={654}
            alt=""
            src="/shadow.svg"
          />
          <Image
            className="absolute top-[20.97%] right-[-31.05%] bottom-[59.68%] left-[17.87%] max-w-full overflow-hidden max-h-full hidden"
            width={313}
            height={115}
            alt=""
            src="/buttons.svg"
          />
          <Image
            className="absolute top-[0%] right-[-29.98%] bottom-[-5.7%] left-[18.94%] rounded-[51.76px] max-w-full overflow-hidden max-h-full hidden"
            width={307}
            height={630}
            alt=""
            src="/body.svg"
          />
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <Image
              className="absolute top-[2.52%] right-[-24.19%] bottom-[-2.52%] left-[24.19%] max-w-full overflow-hidden max-h-full hidden"
              width={277}
              height={596}
              alt=""
              src="/screen1.svg"
            />
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
              <Image
                className="absolute top-[3.36%] right-[-23.56%] bottom-[-3.36%] left-[23.56%] rounded-[36.97px] max-w-full overflow-hidden max-h-full"
                width={277}
                height={596}
                alt=""
                src="/mask.svg"
              />
              <div className="absolute h-[108.22%] w-[101.08%] top-[-7.55%] right-[-0.63%] bottom-[-0.67%] left-[-0.45%]">
                <div className="absolute h-[27.26%] w-[92.03%] top-[31.79%] right-[3.99%] bottom-[40.95%] left-[3.99%] rounded-[2.71px] bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
                <Image
                  className="absolute top-[6.98%] right-[-0.45%] bottom-[-0.93%] left-[0.45%] max-w-full overflow-hidden max-h-full object-cover"
                  width={280}
                  height={606}
                  alt=""
                  src="/juricakoletic7yvzyzeitc8unsplash-11@2x.png"
                />
                <Image
                  className="absolute top-[9.93%] right-[5.15%] bottom-[87.9%] left-[89.85%] max-w-full overflow-hidden max-h-full"
                  width={14}
                  height={14}
                  alt=""
                  src="/icons8delete.svg"
                />
                <div className="absolute h-[99.98%] w-full top-[0%] right-[0%] bottom-[0.02%] left-[0%]">
                  <div className="absolute h-[14.24%] w-full top-[85.76%] right-[0%] bottom-[0%] left-[0%] bg-white opacity-[0.3] mix-blend-normal" />
                  <div className="absolute h-[14.24%] w-full top-[0%] right-[0%] bottom-[85.76%] left-[0%] bg-white opacity-[0.3] mix-blend-normal" />
                  <div className="absolute h-[7.64%] w-[17.6%] top-[90.62%] right-[41.07%] bottom-[1.74%] left-[41.33%]">
                    <div className="absolute h-[75.76%] w-[75.76%] top-[12.12%] right-[12.12%] bottom-[12.12%] left-[12.12%] rounded-81xl bg-white" />
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-gray-500 box-border border-[6px] border-solid border-white" />
                  </div>
                  <div className="absolute h-[1.86%] w-[11.79%] top-[87.15%] right-[43.97%] bottom-[10.99%] left-[44.24%] overflow-hidden">
                    <div className="absolute top-[calc(50%_-_6px)] left-[0%] tracking-[0.75px] leading-[11.95px] font-medium">
                      VIDEO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <b className="absolute top-[calc(50%_-_299.68px)] left-[48.35%] text-[13.53px] font-poppins text-white">
          1:26 min
        </b>
      </div>
      <div className="absolute top-[2957px] left-[676px] w-[300px] h-[265px] text-left text-[10.4px] text-darkslategray-600">
        <div className="absolute top-[0px] left-[0px] w-[300px] h-[265px] overflow-hidden">
          <div className="absolute h-[72.9%] w-[94.37%] top-[4.01%] right-[2.82%] bottom-[23.09%] left-[2.82%] rounded-[2.97px] bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
          <div className="absolute h-[100.17%] w-[100.25%] top-[-0.14%] right-[-0.12%] bottom-[-0.03%] left-[-0.12%] rounded-lg bg-white box-border border-[0.7px] border-solid border-gainsboro-100" />
          <Image
            className="absolute top-[4.15%] right-[2.73%] bottom-[38.87%] left-[2.94%] max-w-full overflow-hidden max-h-full object-cover"
            width={283}
            height={151}
            alt=""
            src="/group-3@2x.png"
          />
          <b className="absolute top-[calc(50%_+_43.46px)] left-[6.66%]">
            Video for Data Scientist Interview
          </b>
          <Image
            className="absolute top-[66.96%] right-[7.86%] bottom-[28.51%] left-[88.14%] max-w-full overflow-hidden max-h-full"
            width={12}
            height={12}
            alt=""
            src="/icons8remove.svg"
          />
          <Image
            className="absolute top-[23.78%] right-[44.02%] bottom-[61.88%] left-[43.31%] max-w-full overflow-hidden max-h-full opacity-[0.86] mix-blend-normal"
            width={38}
            height={38}
            alt=""
            src="/icons8circled-play.svg"
          />
        </div>
        <div className="absolute top-[220.54px] left-[12.54px] w-[275px] h-[34px] text-[11.89px] text-white">
          <div className="absolute top-[0px] left-[0px] rounded-[2.97px] [background:linear-gradient(180deg,_#00bbe7,_#0086ca)] w-[274.92px] h-[33.44px]" />
          <div className="absolute top-[8.17px] left-[78.02px] w-[121px] h-[17px] overflow-hidden">
            <b className="absolute top-[calc(50%_-_8.5px)] left-[20.88%]">
              Add New Video
            </b>
            <Image
              className="absolute h-[82.35%] w-[11.57%] top-[13.11%] right-[88.43%] bottom-[4.54%] left-[0%] max-w-full overflow-hidden max-h-full"
              width={14}
              height={14}
              alt=""
              src="/icons8plus.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
