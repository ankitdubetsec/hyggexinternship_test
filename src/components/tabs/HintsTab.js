import React from "react";
import FAQ from "../../faqs/FAQ";

const HintsTab = () => {
  return (
    <div className="hints-tab">
      <div className="hint-content">
        {/* This is where the FAQ or hints will be rendered */}
        <FAQ />
      </div>
    </div>
  );
};

export default HintsTab;
