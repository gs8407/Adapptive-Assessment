import { Link } from "@remix-run/react";

type ButtonProps = {
  title: string;
  url: string;
  type: string;
};

function Button({ title, url, type }: ButtonProps) {
  return (
    <Link className={type} to={url}>
      {title} My button
    </Link>
  );
}
export default Button;
