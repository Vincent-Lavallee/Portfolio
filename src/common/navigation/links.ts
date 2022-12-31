export interface Link {
  label: string;
  link: string;
}

const links = [
  {
    label: "Home",
    link: "/",
  },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
] as Link[];

export default links;
