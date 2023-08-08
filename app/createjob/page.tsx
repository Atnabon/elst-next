import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const CreateJob: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1367px] overflow-hidden text-left text-xs text-darkslategray-700 font-poppins">
      <div className="absolute top-[0px] left-[959px] bg-white w-[960px] h-[1286px]" />
      <b className="absolute top-[142px] left-[1080px] text-[24px] text-darkslategray-500">
        Post a job
      </b>
      <div className="absolute top-[1261px] left-[1080px] w-[360px] h-[45px] text-center text-base text-white">
        <div className="absolute top-[0px] left-[0px] w-[360px] h-[45px] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11.5px)] left-[44.72%]">
            Next
          </b>
        </div>
      </div>
      <div className="absolute top-[202px] left-[1080px] w-[581px] h-[29px] text-sm text-gray-600">
        <div className="absolute top-[0px] left-[0px] w-[581px] h-[29px]">
          <div className="absolute top-[0px] left-[0px] w-[581px] h-[23px] overflow-hidden">
            <b className="absolute top-[calc(50%_-_11.5px)] left-[0%] text-base text-steelblue-200">
              <Link href="/createjob">Company Details</Link>
            </b>
            <div className="absolute top-[calc(50%_-_8.5px)] left-[28.92%]">
              <Link href="/createjob/jobdetails">Job Details</Link>
            </div>
            <div className="absolute top-[calc(50%_-_8.5px)] left-[46.47%]">
              <Link href="/createjob/candidaterequirements">Candidate Requirements</Link>
            </div>
            <div className="absolute top-[calc(50%_-_8.5px)] left-[81.24%]">
              <Link href="/createjob/jobdescription">Job Description</Link>
            </div>
          </div>
          <Image
            className="absolute top-[27.5px] left-[-0.5px] "
            width={143}
            height={1}
            alt=""
            src="/line-2.svg"
          />
        </div>
      </div>
      <div className="absolute top-[24px] left-[0px] w-[1920px] h-[68px] text-sm text-darkslategray-100">
        <Image
          className="absolute top-[67px] left-[0px] opacity-[0.1] mix-blend-normal"
          width={1920}
          height={1}
          alt=""
          src="/line-21.svg"
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
      <div className="absolute top-[268.5px] left-[1081.5px] rounded bg-white box-border w-[361px] h-[71px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[281px] left-[1096px] opacity-[0.4] mix-blend-normal">
        Your Company Name
      </div>
      <b className="absolute top-[308px] left-[1096px] text-sm">
        Premier Coast Realty
      </b>
      <div className="absolute top-[438.5px] left-[1081.5px] rounded bg-white box-border w-[361px] h-[71px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[451px] left-[1096px] opacity-[0.4] mix-blend-normal">
        Your Name
      </div>
      <b className="absolute top-[481px] left-[1096px] text-sm">John Smith</b>
      <div className="absolute top-[353.5px] left-[1081.5px] rounded bg-white box-border w-[361px] h-[71px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[366px] left-[1096px] opacity-[0.4] mix-blend-normal">
        Company Size
      </div>
      <b className="absolute top-[396px] left-[1096px] text-sm">
        How Many Employees?
      </b>
      <div className="absolute top-[396px] left-[1412px] text-xl font-material-icons text-black">
        
      </div>
      <div className="absolute top-[523.5px] left-[1081.5px] rounded bg-white box-border w-[361px] h-[71px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[563px] left-[1162px] text-xl font-material-icons text-black">
        
      </div>
      <b className="absolute top-[563px] left-[1198px] text-sm">904-229-5287</b>
      <div className="absolute top-[560px] left-[1099px] text-base font-roboto text-white text-center">
        🇺🇸
      </div>
      <div className="absolute top-[536px] left-[1096px] opacity-[0.4] mix-blend-normal">
        Phone
      </div>
      <b className="absolute top-[563px] left-[1126px] text-sm">(+1)</b>
      <div className="absolute top-[663.5px] left-[1081.5px] rounded bg-white box-border w-44 h-[71px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[676px] left-[1096px] opacity-[0.4] mix-blend-normal">
        City
      </div>
      <b className="absolute top-[704px] left-[1096px] text-sm">NY</b>
      <div className="absolute top-[706px] left-[1228px] text-xl font-material-icons text-black">
        
      </div>
      <div className="absolute top-[664px] left-[1267px] w-[175px] h-[70px] overflow-hidden">
        <div className="absolute h-[101.43%] w-[100.57%] top-[-0.71%] right-[-0.29%] bottom-[-0.71%] left-[-0.29%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[8%] opacity-[0.4] mix-blend-normal">
          State
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[8%] text-sm">NY</b>
        <div className="absolute top-[calc(50%_+_7px)] left-[82.29%] text-xl font-material-icons text-black">
          
        </div>
      </div>
      <div className="absolute top-[748.5px] left-[1079.5px] rounded bg-white box-border w-44 h-[71px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[761px] left-[1094px] opacity-[0.4] mix-blend-normal">
        Country
      </div>
      <b className="absolute top-[789px] left-[1094px] text-sm">USA</b>
      <div className="absolute top-[791px] left-[1226px] text-xl font-material-icons text-black">
        
      </div>
      <b className="absolute top-[629px] left-[1082px] text-sm">
        Company Location
      </b>
      <div className="absolute top-[1010px] left-[1082px] w-[175px] h-[70px] overflow-hidden">
        <div className="absolute h-[101.43%] w-[100.57%] top-[-0.71%] right-[-0.29%] bottom-[-0.71%] left-[-0.29%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[8%] opacity-[0.4] mix-blend-normal">
          City
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[8%] text-sm">NY</b>
        <div className="absolute top-[calc(50%_+_7px)] left-[83.43%] text-xl font-material-icons text-black">
          
        </div>
      </div>
      <div className="absolute top-[1010px] left-[1266px] w-[175px] h-[70px] overflow-hidden">
        <div className="absolute h-[101.43%] w-[100.57%] top-[-0.71%] right-[-0.29%] bottom-[-0.71%] left-[-0.29%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[8%] opacity-[0.4] mix-blend-normal">
          State
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[8%] text-sm">NY</b>
        <div className="absolute top-[calc(50%_+_7px)] left-[82.29%] text-xl font-material-icons text-black">
          
        </div>
      </div>
      <div className="absolute top-[1095px] left-[1080px] w-[175px] h-[70px] overflow-hidden">
        <div className="absolute h-[101.43%] w-[100.57%] top-[-0.71%] right-[-0.29%] bottom-[-0.71%] left-[-0.29%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[8%] opacity-[0.4] mix-blend-normal">
          Country
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[8%] text-sm">USA</b>
        <div className="absolute top-[calc(50%_+_7px)] left-[83.43%] text-xl font-material-icons text-black">
          
        </div>
      </div>
      <b className="absolute top-[926px] left-[1082px] text-sm">Job Location</b>
      <div className="absolute top-[1180px] left-[1082px] w-[360px] h-[70px] overflow-hidden">
        <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
          Company Street Address
        </div>
        <b className="absolute top-[calc(50%_+_4px)] left-[3.89%] text-sm">
          123 NY, USA
        </b>
      </div>
      <div className="absolute top-[830px] left-[1082px] w-[360px] h-[70px] overflow-hidden">
        <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
          Company Street Address
        </div>
        <b className="absolute top-[calc(50%_+_4px)] left-[3.89%] text-sm">
          123 NY, USA
        </b>
      </div>
      <div className="absolute top-[969.5px] left-[1081.5px] rounded-[50%] bg-white box-border w-[21px] h-[21px] border-[1px] border-solid border-steelblue-200" />
      <div className="absolute top-[970px] left-[1082px] w-[242px] h-[21px] text-mini text-steelblue-200">
        <div className="absolute top-[0px] left-[26px] w-[216px] h-[21px] overflow-hidden">
          <b className="absolute top-[calc(50%_-_10.5px)] left-[0%]">
            Same as Company Location
          </b>
        </div>
        <Image
          className="absolute top-[0px] left-[0px]"
          width={20}
          height={20}
          alt=""
          src="/checked-3.svg"
        />
      </div>
    </div>
  );
};

export default CreateJob;
