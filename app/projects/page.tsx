import React from "react";
import { NextPage } from "next";
import ProjectsPageComponent, { ProjectData } from "@/components/projects";

const ProjectsPage: NextPage = async () => {
  const projects = await getProjects();
  return <ProjectsPageComponent projects={projects} />;
};

const getProjects = async (): Promise<ProjectData[]> => {
  return (await import("@/static-data/projects.json")).default as ProjectData[];
};

export default ProjectsPage;
