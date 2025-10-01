import ProjectCard from "@/components/ProjectCard";
import { createFileRoute } from "@tanstack/react-router";
import { BsChevronDown } from "react-icons/bs";

export const Route = createFileRoute("/dashboard/$username/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="w-full rounded-xl shadow-inner shadow-link p-2">
        <div>
          <span className="text-sm">Current Project:</span>
          <span className="m-2 border-b text-link font-bold text-lg border-link">
            Project Name
          </span>
        </div>
        <div className="w-full flex justify-center p-2">
          <BsChevronDown className="rounded cursor-pointer hover:shadow shadow-link w-8 h-4" />
          {/* Dropdown display with information about the current open project */}
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-2 shadow-inner shadow-link rounded-xl p-2 overflow-y-auto scrollbar">
        <ProjectCard name="Project One" />
        <ProjectCard name="Project Two" />
        <ProjectCard name="Project Three" />
        <ProjectCard name="Project Four" />
        <ProjectCard name="Project Four" />
        <ProjectCard name="Project Four" />
        <ProjectCard name="Project Four" />
        <ProjectCard name="Project Four" />
        <ProjectCard name="Project Four" />
        <ProjectCard name="Project Four" />
        <ProjectCard name="Project Four" />
      </div>
    </>
  );
}
