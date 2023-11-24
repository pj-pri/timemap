import { Edge, Node, Position } from "reactflow";
import { NodeInner } from "../node-inner";
import { DocView } from "../doc-view";
import Markdown from "react-markdown";

const inner = NodeInner;
export const initialNodes: Node[] = [
  // {
  //   id: "2023-09",
  //   type: "input",
  //   data: {
  //     label: "2023-09",
  //   },
  //   position: {
  //     x: 0,
  //     y: -100,
  //   },
  //   targetPosition: Position.Right,
  //   sourcePosition: Position.Right,
  //   width: 100,
  //   height: 20,
  //   className: "node-inner__date",
  //   style: {
  //     fontSize: "10px",
  //     border: "none",
  //     backgroundColor: "blue",
  //     color: "white",
  //     borderRadius: "0px",
  //     width: "auto",
  //     padding: "3px 20px",
  //   },
  // },
  // {
  //   id: "1",
  //   type: "input",
  //   data: {
  //     label: "Input Node",
  //   },
  //   position: {
  //     x: 0,
  //     y: 25,
  //   },
  //   targetPosition: Position.Right,
  //   sourcePosition: Position.Right,
  //   width: 150,
  //   height: 40,
  // },
  // {
  //   id: "2",
  //   className: " bg-red-300 ",
  //   data: {
  //     label: (
  //       <Markdown className={"text-left "}>
  //         {" ### 2023-11-24 \n ### first \n - one \n - two \n - three "}
  //       </Markdown>
  //     ),
  //   },
  //   position: {
  //     x: 196.30522088353405,
  //     y: 22.73092369477905,
  //   },
  //   sourcePosition: Position.Right,
  //   targetPosition: Position.Left,
  //   width: 150,
  //   height: 40,
  //   selected: true,
  //   positionAbsolute: {
  //     x: 196.30522088353405,
  //     y: 22.73092369477905,
  //   },
  //   dragging: false,
  // },
  {
    id: "3",
    type: "output",
    data: {
      label: "Output Node",
    },
    position: {
      x: 388.449799196787,
      y: 22.931726907630434,
    },
    targetPosition: Position.Left,
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 388.449799196787,
      y: 22.931726907630434,
    },
    dragging: false,
  },
];

export const initialEdges: Edge[] = [
  // { id: "date-1", source: "2023-09", target: "2023-10" },
  { id: "date-2", source: "2023-10", target: "2023-11" },
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];
