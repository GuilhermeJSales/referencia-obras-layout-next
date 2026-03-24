export interface ProjectsProps {
  id: number;
  title: string;
  client: string;
  category: string;
  location: string;
  state: string;
  region: string;
  area: string;
  year: string;
  duration: string;
  description: string;
  services: string[];
  images: string[];
  featured: boolean;
}

export interface CategoriesProps {
  id: string;
  label: string;
}

export interface RegionsProps {
  id: string;
  label: string;
}
