import clsx from "clsx";
import { TNavList } from "../../../utils/type";
import { useNavigate } from "react-router-dom";

type NavListDekstopProps = {
  data: TNavList[];
  path: string;
  scrollPos: number;
};
export const NavlistDekstop = ({
  data,
  path,
  scrollPos,
}: NavListDekstopProps) => {
  const navigate = useNavigate();
  return (
    <ul className="hidden md:flex gap-4">
      {data.map((item) => (
        <li
          onClick={() => {
            navigate(item.href);
          }}
          key={item.title}
          className={clsx(
            path === "/"
              ? scrollPos > 50
                ? "text-secondary hover:text-primary"
                : "text-white hover:text-primary"
              : "text-secondary hover:text-primary",
            path === item.href
              ? "font-bold border-b-2 !text-primary border-primary"
              : "",
            "capitalize cursor-pointer font-comfortaa drop-shadow-md transition-all ease-in-out duration-300 text-sm"
          )}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
