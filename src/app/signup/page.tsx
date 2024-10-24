import facebook from "@/assets/FacebookLogin.png";
import googleIcon from "@/assets/GoogleLogin.png";
import Image from "next/image";

const SignUp = () => {
  return (
    <div>
      <div style={{ border: "1px solid red" }} className="container mx-auto">
        <div
          style={{ border: "1px solid red" }}
          className="mx-auto mt-[55px] max-w-[678px]"
        >
          <h3 className="mb-[6px] text-center font-poppins text-[32px] font-medium text-grey">
            Please do Multi Step Form{" "}
          </h3>
          <h6 className="text-center font-prosto text-[13px] font-normal text-black">
            We're always looking for talented Mentors
          </h6>

          <div className="mt-[26px] flex gap-4">
            <div className="mb-[68px] flex w-full items-center justify-start rounded border-[1px] border-[#184E7780] py-[6px] pl-3">
              <div className="rounded-[10px] bg-[#E9EBED] px-3 py-[9px]">
                <Image src={facebook} alt="Facebook Icon"></Image>
              </div>
              <h6 className="ml-[22.5px] text-center text-base font-semibold text-blue">
                Continue with Facebook
              </h6>
            </div>
            <div className="mb-[18px] flex w-full items-center rounded bg-blue py-[6px] text-base font-semibold text-white">
              <div className="ml-3 mr-6 rounded-2xl bg-white px-[9px] py-[4px]">
                <Image src={googleIcon} alt="Google Icon "></Image>
              </div>
              <h6>Continue with Google</h6>
            </div>
          </div>

          <div className="my-[38px] flex items-center justify-center">
            {/* <div className="border-[1.25px] border-[#4B51554D]"></div> */}
            <hr className="w-full border-[1.25px] border-[#4B51554D]" />
            <span className="px-3 font-poppins font-[275] text-base text-grey">OR</span>
            <hr className="w-full border-[1.25px] border-[#4B51554D]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
