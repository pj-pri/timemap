import React from "react";

function CNodeInnert({ data }: { data?: string }) {
  return <div>{data}</div>;
}

const CNodeInnertRef = React.forwardRef(CNodeInnert);
export const NodeInner = React.memo(CNodeInnertRef);
