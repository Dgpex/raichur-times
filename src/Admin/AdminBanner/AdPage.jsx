import React from "react";

const AdPage = ({ imgSrc, linkToAd }) => {
  console.log(linkToAd);
  return (
    <div className="">
      <a href={linkToAd}>
        <img src={imgSrc} className="h-full w-full object-cover" />
      </a>
    </div>
  );
};

export default AdPage;