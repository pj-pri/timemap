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

function CView({ clickHandler }: { clickHandler: (e: any) => void }) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: {
      label: "Input Node",
    },
    position: {
      x: 0,
      y: 25,
    },
    targetPosition: Position.Right,
    sourcePosition: Position.Right,
    width: 150,
    height: 40,
  },
  {
    id: "2",
    className: " bg-red-300 ",
    data: { label: <div>Default Node</div> },
    position: {
      x: 196.30522088353405,
      y: 22.73092369477905,
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    width: 150,
    height: 40,
    selected: true,
    positionAbsolute: {
      x: 196.30522088353405,
      y: 22.73092369477905,
    },
    dragging: false,
  },
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

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3", animated: true },
];
