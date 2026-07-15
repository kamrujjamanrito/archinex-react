import { ProcessStep, ServiceFeature } from "@/types/service-details.types";

export const workProcessSteps: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "Research",
    description:
      "Every project is unique. The first point for us is always to study the context, environment, brand and mission and wishes of the customer: analysis and compilation of a variety of source data.",
  },
  {
    id: 2,
    number: "02",
    title: "Idea Generate",
    description:
      "Every project is unique. The first point for us is always to study the context, environment, brand and mission and wishes of the customer: analysis and compilation of a variety of source data.",
  },
  {
    id: 3,
    number: "03",
    title: "Define Concept",
    description:
      "Every project is unique. The first point for us is always to study the context, environment, brand and mission and wishes of the customer: analysis and compilation of a variety of source data.",
  },
  {
    id: 4,
    number: "04",
    title: "Main Design",
    description:
      "Every project is unique. The first point for us is always to study the context, environment, brand and mission and wishes of the customer: analysis and compilation of a variety of source data.",
  },
];

export const serviceFeatures: ServiceFeature[] = [
  { id: 1, icon: "/images/icons/one.svg", label: "Schematic & detailed design" },
  { id: 2, icon: "/images/icons/two.svg", label: "Concept design & feasibility studies" },
  { id: 3, icon: "/images/icons/three.svg", label: "Planning & permitting support" },
  { id: 4, icon: "/images/icons/four.svg", label: "Site supervision and project coordination" },
];