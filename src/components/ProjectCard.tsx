import { useState } from "react";
import { BsEnvelope, BsPencilSquare } from "react-icons/bs";
import ActionButton from "./ActionButton";

export default function ProjectCard({ name }: { name: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg p-2 flex flex-col cursor-pointer hover:border-ember duration-300">
      <div
        className={`flex justify-evenly items-center w-full `}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <span className="w-1/2">{name}</span>
        <div className="mx-auto flex items-center gap-2">
          <span className="flex items-center gap-2 hover:text-link">
            10 <BsEnvelope />
          </span>
          <span className="flex items-center gap-2 hover:text-link">
            1 <BsPencilSquare />
          </span>
        </div>
        <span className="flex-shrink">10/01/25</span>
      </div>
      {open && <ActionButton to="../">Open</ActionButton>}
    </div>
  );
}
