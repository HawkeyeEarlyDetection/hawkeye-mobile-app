import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col max-w-[352px]">
      <div className="flex gap-5 justify-between items-start px-px w-full text-3xl tracking-wider leading-7 text-center whitespace-nowrap">
        <div className="flex flex-col self-start px-5">
          <div className="flex gap-5 justify-between font-bold text-neutral-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2b746482e393ec847864e17e0855fe87e6979a32cdb283bf67d48b3742c7ccd?"
              className="shrink-0 self-start w-2.5 border-solid aspect-[0.63] border-[3px] border-neutral-900 stroke-[2.5px] stroke-neutral-900"
            />
            <div>Forgot</div>
          </div>
          <div className="mt-9 text-black">Hawkeye</div>
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 self-end mt-6 aspect-square w-[72px]"
        />
      </div>
      <div className="flex flex-col px-5 mt-2 w-full text-base text-neutral-900">
        <img
          loading="lazy"
          srcSet="..."
          className="self-center w-full aspect-[0.95] max-w-[243px]"
        />
        <div className="self-center mt-20 text-2xl font-bold tracking-wide text-center">
          Forgot Password?
        </div>
        <div className="self-start mt-5 ml-4 tracking-normal leading-6 text-center text-stone-500">
          Don’t worry! it happens. Please enter phone number associated with
          your account
        </div>
        <div className="mt-14 leading-[157%]">Enter your mobile number</div>
      </div>
      <div className="flex gap-5 justify-between px-7 py-5 mt-3 w-full text-base leading-4 whitespace-nowrap bg-white rounded-2xl border border-solid border-neutral-300">
        <div className="flex gap-5 justify-between my-auto">
          <div className="tracking-wide text-neutral-900">+1</div>
          <div className="flex gap-2.5 tracking-normal text-stone-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c14f0d1a8925691853caa5be3c2b3b5a9b94f3d7cd82db7d4485ef62a645266?"
              className="shrink-0 my-auto w-3 aspect-[1.72] fill-neutral-900"
            />
            <div className="flex-auto">458-465-6466</div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/239e1d7f6273371ceb7a2d9d8a37d50385fc473e02c9cd4701f1e063b3cf8ff8?"
          className="shrink-0 aspect-[1.06] w-[17px]"
        />
      </div>
      <div className="justify-center items-center px-16 py-5 mt-6 w-full text-xl font-bold leading-4 text-center text-white rounded-2xl bg-neutral-900">
        Get OTP
      </div>
    </div>
  );
}


