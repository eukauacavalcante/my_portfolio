import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n";

export interface ProjectFunctionality {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image: string[] | null;
  stack: string[];
  full_stack: string[];
  functionalities: ProjectFunctionality[];
  github: string | null;
  documentation: string | null;
  linkedin: string | null;
  fullDescription?: string;
  featured?: boolean;
}

export async function getProjects(
  locale: Locale | string,
): Promise<ProjectData[]> {
  const t = await getTranslations({ locale, namespace: "projects" });
  return t.raw("list") as ProjectData[];
}
