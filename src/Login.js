import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col px-5 text-base leading-6 max-w-[354px]">
      <div className="flex gap-5 justify-between px-px w-full text-3xl tracking-wider leading-7 text-center whitespace-nowrap">
        <div className="flex flex-col">
          <div className="self-end font-bold text-zinc-800">Login</div>
          <div className="mt-16 text-black">Hawkeye</div>
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 my-auto aspect-square w-[72px]"
        />
      </div>
      <div className="flex gap-5 items-start mt-12 w-full tracking-wider text-zinc-800">
        <div className="flex-auto self-end mt-20">Enter your User ID</div>
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 self-start aspect-[0.91] w-[78px]"
        />
      </div>
      <div className="flex gap-5 px-6 py-5 mt-3 w-full font-medium tracking-widest whitespace-nowrap bg-white rounded-2xl border border-solid border-neutral-300 leading-[100%] text-stone-500">
        <div className="flex-auto">theirUserID</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/82d5225d2479d6749f2c3ac42b93414a5bdd122998bc7a50c41b322a29178f0a?"
          className="shrink-0 aspect-square w-[17px]"
        />
      </div>
      <div className="mt-6 w-full tracking-wider text-zinc-800">
        Enter your password
      </div>
      <div className="flex gap-5 px-5 py-6 mt-3.5 w-full text-xl font-medium tracking-widest leading-4 whitespace-nowrap bg-white rounded-2xl border border-solid border-neutral-300 text-stone-500">
        <div className="flex-auto my-auto">**************</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce7673ea6f45300c6272ba32ddc6b9c2cc70551f18229b8983826dc55e757d05?"
          className="shrink-0 w-5 aspect-[1.54] fill-stone-300"
        />
      </div>
      <div className="self-end mt-4 tracking-wider text-zinc-800">
        forgot password?
      </div>
      <div className="justify-center items-center px-16 py-5 mt-3 w-full text-xl font-bold leading-4 text-center text-white whitespace-nowrap rounded-2xl bg-neutral-900">
        Login
      </div>
      <div className="self-center mt-5 font-medium tracking-normal leading-7 text-center text-neutral-900">
        <span className="">Don’t have an account? </span>
        <span className="font-bold text-neutral-900">Sign Up</span>
      </div>
    </div>
  );
}

