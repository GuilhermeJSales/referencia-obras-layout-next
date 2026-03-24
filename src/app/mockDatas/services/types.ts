export type ServicesIcons =
  | 'Factory'
  | 'Building'
  | 'Hammer'
  | 'FileCheck'
  | 'ClipboardList'
  | 'Ruler';

export interface Services {
  id: number;
  title: string;
  description: string;
  icon: ServicesIcons;
}
