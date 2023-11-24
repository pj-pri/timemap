import { ReactNode } from "react";
import { Position, Node } from "reactflow";

export const genDateNode = ({
  type = "middle",
  date,
  pointX,
  pointY,
}: {
  type: "middle" | "start" | "end";
  date: string;
  pointX: number;
  pointY: number;
}): Node => {
  let _type = "default";
  let source = Position.Right;
  let target = Position.Left;

  if (type === "start") {
    _type = "input";
    target = Position.Right;
  }

  if (type === "end") {
    _type = "output";
    source = Position.Left;
    target = Position.Left;
  }

  return {
    id: date,
    type: _type,
    data: {
      label: date,
    },
    position: {
      x: pointX,
      y: pointY,
    },
    targetPosition: target,
    sourcePosition: source,
    width: 100,
    height: 20,
    className: "node-inner__date",
    style: {
      fontSize: "10px",
      border: "none",
      backgroundColor: "blue",
      color: "white",
      borderRadius: "0px",
      width: "auto",
      padding: "3px 20px",
    },
    dragging: false,
    // dragHandle: ,
  } as Node;
};

export const genTextNode = ({
  type = "middle",
  id,
  pointX,
  pointY,
  label,
}: {
  type: "middle" | "start" | "end";
  id: string;
  pointX: number;
  pointY: number;
  label?: ReactNode;
}) => {
  let _type = "default";
  let source = Position.Right;
  let target = Position.Left;

  if (type === "start") {
    _type = "input";
    target = Position.Right;
  }

  if (type === "end") {
    _type = "output";
    source = Position.Left;
    target = Position.Left;
  }

  return {
    id,
    // className: " bg-red-300 ",
    data: {
      label,
    },
    position: {
      x: pointX,
      y: pointY,
    },
    sourcePosition: source,
    targetPosition: target,
    width: 150,
    height: 40,
    selected: true,
    positionAbsolute: {
      x: pointX,
      y: pointY,
    },
    dragging: false,
    style: {
      fontSize: "12px",
      padding: "5px",
      height: "150px",
    },
  };
};

export const genEdges = ({
  id,
  source,
  target,
}: {
  id: string;
  source: string;
  target: string;
}) => {
  return {
    id,
    source,
    target,
  };
};
