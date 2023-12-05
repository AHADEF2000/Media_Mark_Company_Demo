import React from "react";

type TitleProps = {
  title: String;
  subTitle: String;
};

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className="py-14 text-center">
      <h1 className="pb-4 text-4xl uppercase italic opacity-50 md:text-6xl">
        {title}
      </h1>
      <h2 className="text-xl">{subTitle}</h2>
    </div>
  );
};

export default Title;
