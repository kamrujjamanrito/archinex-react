export interface OverviewThreeItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface OverviewThreeTab {
  id: string;
  buttonText: string;
  icon: string;
  heading: string;
  thumbnail: string;
  items: OverviewThreeItem[];
}
