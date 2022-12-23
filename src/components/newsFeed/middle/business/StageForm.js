import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { handleInputs } from "../../../../extra/function";

export const Name = ({ form, setForm, submit1 }) => {
  return (
    <div>
      <form action="" className="mt-5" onSubmit={(e) => submit1(e)}>
        <label
          htmlFor="business name"
          className="text-primary font-primary font-medium text-sm"
        >
          Enter Business Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => handleInputs(e, setForm, form)}
          className="bg-white border-solid border-[0.5px] rounded border-[#00000080] p-2 my-3 block w-full"
        />
        <label
          htmlFor="tags/keyword"
          className="text-primary font-primary font-medium text-sm"
        >
          Choose Tags/Keywords
        </label>
        <div className="flex justify-evenly items-center bg-white border-solid border-[0.5px] rounded border-[#00000080]  my-3  w-full">
          <BsFillPlusCircleFill className="text-primary text-xl " />
          <input
            type="text"
            className="p-2 w-4/5"
            value={form.tag}
            name="tag"
            onChange={(e) => handleInputs(e, setForm, form)}
            placeholder="you can add up to 10 tags"
          />
          <AiFillMinusCircle className="text-red-500 text-xl" />
        </div>
        <p className="text-center text-[#00000080] font-primary font-medium text-xs mb-3">
          tags/keywords will help your business appear in searches
        </p>
        <label
          htmlFor="email"
          className="text-primary font-primary font-medium text-sm"
        >
          Email
        </label>
        <input
          type="email"
          value={form.email}
          name="email"
          onChange={(e) => handleInputs(e, setForm, form)}
          className="bg-white border-solid border-[0.5px] rounded border-[#00000080] p-2 my-3 block w-full"
        />
        <label
          htmlFor="phone numbar"
          className="text-primary font-primary font-medium text-sm"
        >
          Phone Number
        </label>
        <input
          type="number"
          value={form.phoneNo}
          name="phoneNo"
          onChange={(e) => handleInputs(e, setForm, form)}
          className="bg-white border-solid border-[0.5px] rounded border-[#00000080] p-2 my-3 block w-full"
        />
        <input
          type="submit"
          value="Next"
          className="bg-primary py-3 px-6 text-white"
        />
      </form>
    </div>
  );
};

export const Description = ({ form, setForm, submit2 }) => {
  return (
    <form action="" className="mt-5" onSubmit={(e) => submit2(e)}>
      <label
        htmlFor="business description"
        className="text-primary font-primary font-medium text-sm"
      >
        Enter Business Description
      </label>
      <textarea
        name="description"
        value={form.description}
        onChange={(e) => handleInputs(e, setForm, form)}
        className="bg-white border-solid border-[0.5px] rounded border-[#00000080] p-2 my-3 block w-full"
      />
      <label
        htmlFor="business address"
        className="text-primary font-primary font-medium text-sm"
      >
        Enter Business Address
      </label>

      <textarea
        value={form.address}
        name="address"
        onChange={(e) => handleInputs(e, setForm, form)}
        className="bg-white border-solid border-[0.5px] rounded border-[#00000080] p-2 my-3 block w-full"
      />
      <label
        htmlFor="website"
        className="text-primary font-primary font-medium text-sm"
      >
        Website (Optional)
      </label>
      <input
        type="website"
        value={form.website}
        name="website"
        onChange={(e) => handleInputs(e, setForm, form)}
        className="bg-white border-solid border-[0.5px] rounded border-[#00000080] p-2 my-3 block w-full"
      />
      <input
        type="submit"
        value="Next"
        className="bg-primary py-3 px-6 text-white"
      />
    </form>
  );
};
