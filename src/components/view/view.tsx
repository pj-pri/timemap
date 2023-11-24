import React, { useEffect, useState, useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  Node,
  Position,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import { initialEdges, initialNodes } from "./data";
import { genDateNode, genEdges, genTextNode } from "@/utils/objUtils";
import Markdown from "react-markdown";

function CView({
  clickHandler,
  ref,
}: {
  clickHandler: (e: any) => void;
  ref: any;
}) {
  const initNodes = [
    genDateNode({
      type: "start",
      date: "2023-08",
      pointX: 0,
      pointY: -100,
    }),
    genDateNode({
      type: "middle",
      date: "2023-09",
      pointX: 500,
      pointY: -100,
    }),
    genDateNode({
      type: "middle",
      date: "2023-10",
      pointX: 1000,
      pointY: -100,
    }),
    genDateNode({
      type: "middle",
      date: "2023-11",
      pointX: 1500,
      pointY: -100,
    }),
    genDateNode({
      type: "end",
      date: "2023-12",
      pointX: 2000,
      pointY: -100,
    }),
    genTextNode({
      id: "1",
      pointX: 0,
      pointY: 25,
      type: "start",
      label: "Start Node",
    }),
    genTextNode({
      id: "2",
      pointX: 196.30522088353405,
      pointY: 22.73092369477905,
      type: "middle",
      label: (
        <Markdown className={"text-left "}>
          {" ### 2023-11-24 \n ### first \n - one \n - two \n - four "}
        </Markdown>
      ),
    }),
    ...initialNodes,
  ];

  const initEdges = [
    genEdges({
      id: "date-0",
      source: "2023-08",
      target: "2023-09",
    }),
    genEdges({
      id: "date-1",
      source: "2023-09",
      target: "2023-10",
    }),
    genEdges({
      id: "date-3",
      source: "2023-11",
      target: "2023-12",
    }),
    ...initialEdges,
  ];
  const [nodes, setNodes] = useState(initNodes);
  const [edges, setEdges] = useState(initEdges);

  useEffect(() => {
    console.log("nodes : ", nodes);
  }, [nodes]);

  useEffect(() => {
    console.log("edges : ", edges);
  }, [edges]);

  const onNodesChange = useCallback(
    (changes: any) =>
      setNodes((nds: any) => applyNodeChanges(changes, nds) as any),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
    []
  );

  return (
    <div className="bg-slate-200 w-full h-full border border-solid border-black ">
      <div className="h-full">
        <ReactFlow
          onNodeClick={clickHandler}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodes={nodes}
          edges={edges}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

const ViewRef = React.forwardRef(CView);
const View = React.memo(ViewRef);
export default View;

// const initialNodes: Node[] = [
//   {
//     id: "1",
//     type: "input",
//     data: { label: "Input Node" },
//     position: { x: 0, y: 25 },
//     targetPosition: Position.Right,
//     sourcePosition: Position.Right,
//   },
//   {
//     id: "2",
//     // you can also pass a React component as a label
//     data: { label: <div>Default Node</div> },
//     position: { x: 100, y: 180 },
//     sourcePosition: Position.Right,
//     targetPosition: Position.Left,
//   },
//   {
//     id: "3",
//     type: "output",
//     data: { label: "Output Node" },
//     position: { x: 250, y: 250 },
//     targetPosition: Position.Left,
//   },
// ];
