import React from "react";

const MarkTitle = ({markText, subHead}) => {
  return (
    <div>
      <p className="text-center">
        <mark className="bg-green-30 p-4">{markText}</mark>
      </p>

      <h3 className="mt-6 text-3xl font-bold text-center">
        {subHead}
      </h3>
    </div>
  );
};

export default MarkTitle;
