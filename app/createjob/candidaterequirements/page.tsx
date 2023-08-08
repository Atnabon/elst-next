import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const CandidateRequirements: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1321px] overflow-hidden text-left text-sm text-darkslategray-700 font-poppins">
      <div className="absolute top-[0px] left-[959px] bg-white w-[960px] h-[1286px]" />
      <b className="absolute top-[142px] left-[1080px] text-5xl text-darkslategray-500">
        Post a job
      </b>
      <div className="absolute top-[24px] left-[0px] w-[1920px] h-[68px] text-darkslategray-100">
        <Image
          className="absolute top-[67px] left-[0px]  opacity-[0.1] mix-blend-normal"
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
      <div className="absolute top-[204px] left-[1081px] w-[591px] h-[27px] text-gray-600">
        <div className="absolute top-[0px] left-[0px] w-[591px] h-[27px]">
          <div className="absolute top-[0px] left-[0px] w-[591px] h-[27px] overflow-hidden">
            <div className="absolute top-[calc(50%_-_12.5px)] left-[0%]">
              <Link href="/createjob">Company Details</Link>
            </div>
            <div className="absolute top-[calc(50%_-_12.5px)] left-[25.55%]">
              <Link href="/createjob/jobdetails">Job Details</Link> 
            </div>
            <div className="absolute h-full w-[35.19%] top-[0%] right-[22.34%] bottom-[0%] left-[42.47%] overflow-hidden text-base text-steelblue-200">
              <b className="absolute top-[calc(50%_-_13.5px)] left-[0%]">
                Candidate Requirements
              </b>
              <Image
                className="absolute top-[90.73%] right-[0%] bottom-[1.71%] left-[0%] max-w-full overflow-hidden max-h-full"
                width={208}
                height={1.08}
                alt=""
                src="/line-2.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_-_12.5px)] left-[81.56%]">
              <Link href="/createjob/jobdescription">Job Description</Link>
            </div>
          </div>
        </div>
      </div>
      <b className="absolute top-[256px] left-[1083px]">
        Candidate Requirements
      </b>
      <div className="absolute top-[290.5px] left-[1080.5px] rounded bg-white box-border w-[361px] h-[71px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[303px] left-[1095px] text-xs opacity-[0.4] mix-blend-normal">
        How Many Hires Do You Require For this Job?
      </div>
      <b className="absolute top-[331px] left-[1095px]">10</b>
      <div className="absolute top-[333px] left-[1414px] text-xl font-material-icons text-black">
        
      </div>
      <div className="absolute top-[375.5px] left-[1080.5px] rounded bg-white box-border w-[361px] h-[71px] border-[1px] border-solid border-gainsboro-100" />
      <div className="absolute top-[388px] left-[1095px] text-xs opacity-[0.4] mix-blend-normal">
        How Urgently Do You Need to Make a Hire?
      </div>
      <b className="absolute top-[416px] left-[1095px]">14 days</b>
      <div className="absolute top-[418px] left-[1414px] text-xl font-material-icons text-black">
        
      </div>
      <b className="absolute top-[476px] left-[1087px]">
        Additional Job Details
      </b>
      <div className="absolute top-[513px] left-[1087px] w-[283px] h-[503px] overflow-hidden">
        <div className="absolute h-[3.98%] w-[54.42%] top-[8.55%] right-[45.58%] bottom-[87.48%] left-[0%] overflow-hidden text-steelblue-200">
          <b className="absolute top-[calc(50%_-_10px)] left-[18.18%]">
            Monday to Friday
          </b>
          <div className="absolute h-[105%] w-[13.64%] top-[-2.5%] right-[86.69%] bottom-[-2.5%] left-[-0.32%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[43.82%] top-[16.5%] right-[56.18%] bottom-[79.52%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[22.58%]">
            No Weekends
          </div>
          <div className="absolute h-[105%] w-[16.94%] top-[-2.5%] right-[83.47%] bottom-[-2.5%] left-[-0.4%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[59.01%] top-[24.45%] right-[40.99%] bottom-[71.57%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[16.77%]">
            Weekends Required
          </div>
          <div className="absolute h-[105%] w-[12.57%] top-[-2.5%] right-[87.72%] bottom-[-2.5%] left-[-0.3%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[54.42%] top-[32.41%] right-[45.58%] bottom-[63.62%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[18.18%]">
            Holidays Required
          </div>
          <div className="absolute h-[105%] w-[13.64%] top-[-2.5%] right-[86.69%] bottom-[-2.5%] left-[-0.32%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[31.8%] top-[40.36%] right-[68.2%] bottom-[55.67%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[31.11%]">
            Day Shift
          </div>
          <div className="absolute h-[105%] w-[23.33%] top-[-2.5%] right-[77.22%] bottom-[-2.5%] left-[-0.56%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute top-[calc(50%_-_251.5px)] left-[0%] leading-[24px]">
          What Availability is Needed For This Job?
        </div>
        <Image
          className="absolute h-[3.98%] w-[7.07%] top-[8.55%] right-[92.93%] bottom-[87.48%] left-[0%] max-w-full overflow-hidden max-h-full"
          width={20}
          height={20}
          alt=""
          src="/checked-3.svg"
        />
        <div className="absolute h-[3.98%] w-[36.75%] top-[48.31%] right-[63.25%] bottom-[47.71%] left-[0%] overflow-hidden text-steelblue-200">
          <b className="absolute top-[calc(50%_-_10px)] left-[26.92%]">
            Night Shift
          </b>
          <div className="absolute h-[105%] w-[20.19%] top-[-2.5%] right-[80.29%] bottom-[-2.5%] left-[-0.48%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[32.86%] top-[56.26%] right-[67.14%] bottom-[39.76%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[30.11%]">
            Overtime
          </div>
          <div className="absolute h-[105%] w-[22.58%] top-[-2.5%] right-[77.96%] bottom-[-2.5%] left-[-0.54%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[38.16%] top-[64.21%] right-[61.84%] bottom-[31.81%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[25.93%]">
            8 Hour Shift
          </div>
          <div className="absolute h-[105%] w-[19.44%] top-[-2.5%] right-[81.02%] bottom-[-2.5%] left-[-0.46%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[39.58%] top-[72.17%] right-[60.42%] bottom-[23.86%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[25%]">
            10 Hour Shift
          </div>
          <div className="absolute h-[105%] w-[18.75%] top-[-2.5%] right-[81.7%] bottom-[-2.5%] left-[-0.45%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[39.58%] top-[80.12%] right-[60.42%] bottom-[15.9%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[25%]">
            12 Hour Shift
          </div>
          <div className="absolute h-[105%] w-[18.75%] top-[-2.5%] right-[81.7%] bottom-[-2.5%] left-[-0.45%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[27.92%] top-[88.07%] right-[72.08%] bottom-[7.95%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[35.44%]">
            On Call
          </div>
          <div className="absolute h-[105%] w-[26.58%] top-[-2.5%] right-[74.05%] bottom-[-2.5%] left-[-0.63%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[3.98%] w-[46.29%] top-[96.02%] right-[53.71%] bottom-[0%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[21.37%]">
            Overnight Shift
          </div>
          <div className="absolute h-[105%] w-[16.03%] top-[-2.5%] right-[84.35%] bottom-[-2.5%] left-[-0.38%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <Image
          className="absolute h-[3.98%] w-[7.07%] top-[48.31%] right-[92.93%] bottom-[47.71%] left-[0%] max-w-full overflow-hidden max-h-full"
          width={20}
          height={20}
          alt=""
          src="/checked-3.svg"
        />
      </div>
      <div className="absolute top-[1046px] left-[1083px] w-[361px] h-[70px] overflow-hidden text-xs">
        <div className="absolute h-[101.43%] w-full top-[-0.71%] right-[0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[3.88%] opacity-[0.4] mix-blend-normal">
          Please Enter Your Company’s Website
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[3.88%] text-sm">
          (if there is one or leave the form empty)
        </b>
        <div className="absolute top-[calc(50%_+_7px)] left-[94.46%] text-xl font-material-icons text-black hidden">
          
        </div>
      </div>
      <div className="absolute top-[1131px] left-[1083px] w-[360px] h-[70px] overflow-hidden text-xs">
        <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
          Does This Job Allow Hires Fully Remote?
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[3.89%] text-sm">
          Yes
        </b>
        <div className="absolute top-[calc(50%_+_7px)] left-[91.94%] text-xl font-material-icons text-black">
          
        </div>
      </div>
      <div className="absolute top-[1241px] left-[1083px] w-[360px] h-[45px] text-center text-base text-white">
        <div className="absolute top-[0px] left-[0px] w-[360px] h-[45px] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11.5px)] left-[44.72%]">
            Next
          </b>
        </div>
      </div>
    </div>
  );
};

export default CandidateRequirements;
