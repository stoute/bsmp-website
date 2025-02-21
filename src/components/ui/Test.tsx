import React, { useEffect, useState } from "react";

interface TestProps {}

export const Test: React.FC<TestProps> = ({}: TestProps) => {
  const [state, setState] = useState();

  useEffect(() => {
    console.log("Test rendered");
    return () => {};
  }, []);

  return (
    <div>
      <h3 style={{ background: "#ccc", padding: "15px" }}>
        {"Test - placeholder"}
      </h3>
    </div>
  );
};

export default Test;
