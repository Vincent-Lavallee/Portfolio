import { useIntl } from "react-intl";

export interface Link {
  label: string;
  link: string;
}

const useLinks = () => {
  const { formatMessage } = useIntl();

  return [
    {
      label: formatMessage({ id: "navbar.home" }),
      link: "/",
    },
    { label: formatMessage({ id: "navbar.projects" }), link: "/projects" },
    { label: formatMessage({ id: "navbar.contact" }), link: "/contact" },
  ];
};

export default useLinks;
