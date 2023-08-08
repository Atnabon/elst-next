import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const JobDetails: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1755px] overflow-hidden text-left text-sm text-darkslategray-700 font-poppins">
      <div className="absolute top-[0px] left-[959px] bg-white w-[960px] h-[1286px]" />
      <b className="absolute top-[142px] left-[1080px] text-5xl text-darkslategray-500">
        Post a job
      </b>
      <div className="absolute top-[1661px] left-[1080px] w-[360px] h-[45px] text-center text-base text-white">
        <div className="absolute top-[0px] left-[0px] w-[360px] h-[45px] overflow-hidden">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-steelblue-200" />
          <b className="absolute top-[calc(50%_-_11.5px)] left-[44.72%]">
            Next
          </b>
        </div>
      </div>
      <div className="absolute top-[202px] left-[1081px] w-[580px] h-[30px] text-gray-600">
        <div className="absolute top-[0px] left-[0px] w-[580px] h-[30px]">
          <div className="absolute top-[0px] left-[0px] w-[580px] h-[23px] overflow-hidden">
            <div className="absolute top-[calc(50%_-_8.5px)] left-[0%]">
              <Link href="/createjob">Company Details</Link>
            </div>
            <b className="absolute top-[calc(50%_-_11.5px)] left-[25.86%] text-base text-steelblue-200">
              Job Details
            </b>
            <div className="absolute top-[calc(50%_-_8.5px)] left-[46.38%]">
              <Link href="/createjob/candidaterequirements">Candidate Requirements</Link>
            </div>
            <div className="absolute top-[calc(50%_-_8.5px)] left-[81.21%]">
              <Link href="/createjob/jobdescription">Job Description</Link>
            </div>
          </div>
          <Image
            className="absolute top-[27.5px] left-[147.5px] "
            width={101}
            height={2}
            alt=""
            src="/line-2.svg"
          />
        </div>
      </div>
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
      <div className="absolute top-[262px] left-[1083px] w-[360px] h-[70px] overflow-hidden text-xs">
        <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
          Job Title
        </div>
        <b className="absolute top-[calc(50%_+_7px)] left-[3.89%] text-sm">
          Looking for a creative designer
        </b>
      </div>
      <div className="absolute top-[361px] left-[1083px] w-[156px] h-[260px] overflow-hidden">
        <div className="absolute h-[7.69%] w-[59.62%] top-[15.38%] right-[40.38%] bottom-[76.92%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[30.11%]">
            Full-Time
          </div>
          <div className="absolute h-[105%] w-[22.58%] top-[-2.5%] right-[77.96%] bottom-[-2.5%] left-[-0.54%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[7.69%] w-[62.82%] top-[30.77%] right-[37.18%] bottom-[61.54%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[28.57%]">
            Part-Time
          </div>
          <div className="absolute h-[105%] w-[21.43%] top-[-2.5%] right-[79.08%] bottom-[-2.5%] left-[-0.51%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[7.69%] w-[67.31%] top-[46.15%] right-[32.69%] bottom-[46.15%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[26.67%]">
            Temporary
          </div>
          <div className="absolute h-[105%] w-1/5 top-[-2.5%] right-[80.48%] bottom-[-2.5%] left-[-0.48%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[7.69%] w-[58.33%] top-[61.54%] right-[41.67%] bottom-[30.77%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[30.77%]">
            Contract
          </div>
          <div className="absolute h-[105%] w-[23.08%] top-[-2.5%] right-[77.47%] bottom-[-2.5%] left-[-0.55%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[7.69%] w-[62.82%] top-[76.92%] right-[37.18%] bottom-[15.38%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[28.57%]">
            Internship
          </div>
          <div className="absolute h-[105%] w-[21.43%] top-[-2.5%] right-[79.08%] bottom-[-2.5%] left-[-0.51%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[7.69%] w-9/12 top-[92.31%] right-[25%] bottom-[0%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[23.93%]">
            Commission
          </div>
          <div className="absolute h-[105%] w-[17.95%] top-[-2.5%] right-[82.48%] bottom-[-2.5%] left-[-0.43%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute top-[calc(50%_-_130px)] left-[0%]">
          What Type of Job is it?
        </div>
      </div>
      <div className="absolute top-[727px] left-[1083px]">
        What is the Pay for this Job?
      </div>
      <div className="absolute top-[767px] left-[1083px] w-[175px] h-[70px] overflow-hidden text-xs">
        <div className="absolute h-[101.43%] w-[100.57%] top-[-0.71%] right-[-0.29%] bottom-[-0.71%] left-[-0.29%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[8%] opacity-[0.4] mix-blend-normal">
          From $
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[8%] text-sm">{`16 `}</b>
        <div className="absolute top-[calc(50%_+_7px)] left-[83.43%] text-xl font-material-icons text-black">
          
        </div>
      </div>
      <div className="absolute top-[767px] left-[1268px] w-[175px] h-[70px] overflow-hidden text-xs">
        <div className="absolute h-[101.43%] w-[100.57%] top-[-0.71%] right-[-0.29%] bottom-[-0.71%] left-[-0.29%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[8%] opacity-[0.4] mix-blend-normal">
          To $
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[8%] text-sm">20</b>
        <div className="absolute top-[calc(50%_+_7px)] left-[82.29%] text-xl font-material-icons text-black">
          
        </div>
      </div>
      <div className="absolute top-[852px] left-[1081px] w-[360px] h-[70px] overflow-hidden text-xs">
        <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
          Contract Type
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[3.89%] text-sm">
          Per Hour
        </b>
        <div className="absolute top-[calc(50%_+_7px)] left-[91.94%] text-xl font-material-icons text-black">
          
        </div>
      </div>
      <div className="absolute top-[644px] left-[1081px] w-[360px] h-[70px] overflow-hidden text-xs">
        <div className="absolute h-[101.43%] w-[100.28%] top-[-0.71%] right-[-0.14%] bottom-[-0.71%] left-[-0.14%] rounded bg-white box-border border-[1px] border-solid border-gainsboro-100" />
        <div className="absolute top-[calc(50%_-_23px)] left-[3.89%] opacity-[0.4] mix-blend-normal">
          Experience Required?
        </div>
        <b className="absolute top-[calc(50%_+_5px)] left-[3.89%] text-sm">
          N/A
        </b>
        <div className="absolute top-[calc(50%_+_7px)] left-[91.94%] text-xl font-material-icons text-black">
          
        </div>
      </div>
      <div className="absolute top-[945px] left-[1080px] w-[338px] h-[243px] overflow-hidden">
        <div className="absolute h-[8.23%] w-[17.16%] top-[25.93%] right-[82.84%] bottom-[65.84%] left-[0%] overflow-hidden text-steelblue-200">
          <b className="absolute top-[calc(50%_-_10px)] left-[48.28%]">Tips</b>
          <div className="absolute h-[105%] w-[36.21%] top-[-2.5%] right-[64.66%] bottom-[-2.5%] left-[-0.86%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[8.23%] w-[34.62%] top-[42.39%] right-[65.38%] bottom-[49.38%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[23.93%]">
            Commission
          </div>
          <div className="absolute h-[105%] w-[17.95%] top-[-2.5%] right-[82.48%] bottom-[-2.5%] left-[-0.43%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[8.23%] w-[25.74%] top-[58.85%] right-[74.26%] bottom-[32.92%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[32.18%]">
            Bonuses
          </div>
          <div className="absolute h-[105%] w-[24.14%] top-[-2.5%] right-[76.44%] bottom-[-2.5%] left-[-0.57%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[8.23%] w-[40.53%] top-[75.31%] right-[59.47%] bottom-[16.46%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[20.44%]">
            Store Discounts
          </div>
          <div className="absolute h-[105%] w-[15.33%] top-[-2.5%] right-[85.04%] bottom-[-2.5%] left-[-0.36%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[8.23%] w-[33.73%] top-[91.77%] right-[66.27%] bottom-[0%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[24.56%]">
            Other Forms
          </div>
          <div className="absolute h-[105%] w-[18.42%] top-[-2.5%] right-[82.02%] bottom-[-2.5%] left-[-0.44%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute top-[calc(50%_-_121.5px)] left-[0%] leading-[24px]">
          <p className="m-0">{`Are there Any Additional Form of Compensation `}</p>
          <p className="m-0">Offered?</p>
        </div>
        <Image
          className="absolute top-[25.93%] right-[94.08%] bottom-[65.84%] left-[0%] max-w-full overflow-hidden max-h-full"
          width={20}
          height={20}
          alt=""
          src="/checked-3.svg"
        />
      </div>
      <div className="absolute top-[1215px] left-[1080px] w-[289px] h-[423px] overflow-hidden">
        <div className="absolute h-[4.73%] w-[52.6%] top-[10.17%] right-[47.4%] bottom-[85.11%] left-[0%] overflow-hidden text-steelblue-200">
          <b className="absolute top-[calc(50%_-_10px)] left-[18.42%]">
            Health Insurance
          </b>
          <div className="absolute h-[105%] w-[13.82%] top-[-2.5%] right-[86.51%] bottom-[-2.5%] left-[-0.33%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[4.73%] w-[50.87%] top-[19.62%] right-[49.13%] bottom-[75.65%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[19.05%]">
            Dental Insurance
          </div>
          <div className="absolute h-[105%] w-[14.29%] top-[-2.5%] right-[86.05%] bottom-[-2.5%] left-[-0.34%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[4.73%] w-[49.48%] top-[29.08%] right-[50.52%] bottom-[66.19%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[19.58%]">
            Vision Insurance
          </div>
          <div className="absolute h-[105%] w-[14.69%] top-[-2.5%] right-[85.66%] bottom-[-2.5%] left-[-0.35%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[4.73%] w-[48.1%] top-[38.53%] right-[51.9%] bottom-[56.74%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[20.14%]">
            Retirement Plan
          </div>
          <div className="absolute h-[105%] w-[15.11%] top-[-2.5%] right-[85.25%] bottom-[-2.5%] left-[-0.36%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[4.73%] w-[43.94%] top-[47.99%] right-[56.06%] bottom-[47.28%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[22.05%]">
            Signing Bonus
          </div>
          <div className="absolute h-[105%] w-[16.54%] top-[-2.5%] right-[83.86%] bottom-[-2.5%] left-[-0.39%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[4.73%] w-[41.18%] top-[57.45%] right-[58.82%] bottom-[37.83%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[23.53%]">
            Paid Time off
          </div>
          <div className="absolute h-[105%] w-[17.65%] top-[-2.5%] right-[82.77%] bottom-[-2.5%] left-[-0.42%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[4.73%] w-[51.21%] top-[66.9%] right-[48.79%] bottom-[28.37%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[18.92%]">
            Work From Home
          </div>
          <div className="absolute h-[105%] w-[14.19%] top-[-2.5%] right-[86.15%] bottom-[-2.5%] left-[-0.34%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[4.73%] w-[51.21%] top-[76.36%] right-[48.79%] bottom-[18.91%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[18.92%]">
            Flexible Schedule
          </div>
          <div className="absolute h-[105%] w-[14.19%] top-[-2.5%] right-[86.15%] bottom-[-2.5%] left-[-0.34%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute top-[calc(50%_-_211.5px)] left-[0%] leading-[24px]">
          Are Any of the Following Benefits Offered?
        </div>
        <Image
          className="absolute top-[10.17%] right-[93.08%] bottom-[85.11%] left-[0%] max-w-full overflow-hidden max-h-full"
          width={20}
          height={20}
          alt=""
          src="/checked-3.svg"
        />
        <div className="absolute h-[4.73%] w-[45.33%] top-[85.82%] right-[54.67%] bottom-[9.46%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[21.37%]">
            Parental Leave
          </div>
          <div className="absolute h-[105%] w-[16.03%] top-[-2.5%] right-[84.35%] bottom-[-2.5%] left-[-0.38%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
        <div className="absolute h-[4.73%] w-[62.98%] top-[95.27%] right-[37.02%] bottom-[0%] left-[0%] overflow-hidden">
          <div className="absolute top-[calc(50%_-_10px)] left-[15.38%]">
            Relocation Assistance
          </div>
          <div className="absolute h-[105%] w-[11.54%] top-[-2.5%] right-[88.74%] bottom-[-2.5%] left-[-0.27%] rounded-[50%] bg-white box-border border-[1px] border-solid border-lightsteelblue" />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
