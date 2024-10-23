import Link from "next/link";


const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[588px] py-[130px] font-poppins shadow-[0px_15px_5px_2px_#]">
        <h6 className="mb-[38px] text-center text-grey font-medium text-2xl">Log in</h6>

        <form style={{ border: "1px solid red" }} action="" className="w-full">
          <Link href="" className="text-primary font-normal text-[13px] text-end block mb-[18px]">Forgot Password?</Link>
          <input
            type="submit"
            value="Continue"
            className="bg-secondary w-full py-[13px] text-base font-semibold text-white"
          />
        </form>
      </div>
    </div>
  );
}

export default Login