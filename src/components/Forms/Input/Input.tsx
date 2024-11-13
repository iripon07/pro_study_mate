const Input = (props: any) => {
 
  const { type, setFirstName } = props;
   const placeholderValue = type?.toLowerCase();

  return (
    <div className="w-full">
      <label className="mb-[14px] text-[13px] font-medium text-black">
        {type}
        <span className="text-[#FE696A]">*</span>
      </label>

      <input
        type="text"
        // onChange={()=>s}
        placeholder={`Enter ${placeholderValue}`}
        className="w-full rounded-sm border-[1px] border-[#B3B3B3] py-[14px] pl-[13px] text-base font-light text-[#B3B3B3] outline-gray-400"
      />
    </div>
  );
};

export default Input;
