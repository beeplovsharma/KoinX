import React from "react";

const Tokenomics = () => {
  return (
    <>
      <div className="main-container w-full flex flex-col gap-6 bg-white rounded-xl px-4 py-5">
        <h1 className="font-semibold text-xl">Tokenomics</h1>
        <div className="flex flex-col gap-4">
          <p className="font-semibold">Initial Distribution</p>
          <img src="/chart.png" className="w-[300px]" alt="" />
        </div>
        <p className="opacity-60 text-sm pb-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quae
          quod delectus aspernatur dignissimos quas quasi aliquid, reprehenderit
          labore, exercitationem culpa, porro temporibus deserunt praesentium
          quia. Voluptas, fugit impedit sequi asperiores unde vitae illum. Saepe
          voluptatem mollitia quam itaque eius doloribus ab magni officia! Unde
          eveniet aliquam repellendus ex voluptatem exercitationem, eos dolorum
          magnam maxime nisi doloremque laudantium iste deserunt.
        </p>
      </div>
    </>
  );
};

export default Tokenomics;
