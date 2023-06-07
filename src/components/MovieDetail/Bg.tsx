import React from "react";
const Bg = ({ activeSlidePath }: { activeSlidePath: string }) => {
  return (
    <div>
      <img
        src={"https://image.tmdb.org/t/p/w1280/" + activeSlidePath}
        alt="as"
        className="w-full h-full absolute bottom-0"
      />
      {activeSlidePath && <p className="text-white">{activeSlidePath}</p>}
    </div>
  );
};

export default Bg;
