import React, { useEffect, useState } from "react";
import { AiFillFileImage, AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { handleInputs } from "../../../../extra/function";
import { businessAction } from "../../../../store/business.slice";
import { Description, Name } from "./StageForm";

const AddBusiness = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState({
    name: false,
    description: false,
    upload: false,
  });

  const [form, setForm] = useState({
    name: "",
    tag: "",
    email: "",
    phoneNo: "",
    description: "",
    address: "",
    website: "",
  });

  const [image, setImage] = useState();

  useEffect(() => console.log(step), [step]);

  const submit1 = (e) => {
    e.preventDefault();
    const { name, email, phoneNo } = form;
    if (name && email && phoneNo) {
      setStep({ ...step, name: true });
    } else {
      // console.log(step);
      console.log("all inputs are required");
    }
  };
  const submit2 = (e) => {
    e.preventDefault();
    const { name, email, phoneNo, description, address } = form;
    if (name && email && phoneNo && description && address) {
      setStep({ ...step, description: true });
    } else {
      // console.log(step);
      console.log("all inputs are required");
    }
  };
  const checkBeginning = !step.name && !step.description && !step.upload;
  const checkSecond = step.name && !step.description && !step.upload;
  const moveUpload = step.name && step.description;

  return (
    <section className="absolute h-full bg-[#000000cc] grid place-content-center z-20 w-full">
      <div className=" bg-white p-10 relative max-w-[500px] w-[35vw] sml:w-full">
        <FaTimes
          className="absolute top-4 right-4 text-2xl "
          onClick={() => dispatch(businessAction.remove())}
        />
        <h3 className="text-primary font-medium text-2xl">Add Business</h3>
        <p className="flex border-b-[0.5px] border-[#00000099] border-solid py-4">
          <span
            className={` font-primary font-semibold text-sm flex items-center mr-2 ${
              step.name ? "text-primary" : "text-[#32323259]"
            }`}
          >
            Name <TiTick />
          </span>
          <span
            className={` font-primary font-semibold text-sm flex items-center mr-2 ${
              step.description ? "text-primary" : "text-[#32323259]"
            }`}
          >
            Description <TiTick />
          </span>
          <span
            className={`text-[#32323259] font-primary font-semibold text-sm flex items-center `}
          >
            Uploads <TiTick />
          </span>
        </p>
        {checkBeginning ? (
          <Name form={form} setForm={setForm} submit1={submit1} />
        ) : checkSecond ? (
          <Description form={form} setForm={setForm} submit2={submit2} />
        ) : (
          <form action="" className="mt-5" onSubmit={(e) => submit2(e)}>
            <p className="text-primary font-primary font-medium text-sm">
              Add Business Cover
            </p>
            <label
              htmlFor=""
              className="bg-[#00000080] my-6 p-8 cur grid place-content-center"
            >
              <AiFillFileImage className="text-3xl" />
              <input
                className="hidden"
                type="file"
                name="image"
                accept="image/png, image/jpg, image/gif, image/jpeg"
                onChange={({ target }) => setImage(target.files)}
              />
            </label>
            {/* // multiple={true} */}
          </form>
        )}
      </div>
    </section>
  );
};

export default AddBusiness;
