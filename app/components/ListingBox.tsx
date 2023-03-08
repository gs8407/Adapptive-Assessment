import { Link } from "@remix-run/react";
import linkArrow from "~/images/link-arrow.png";

type ProductsType = {
  product: {
    media_url: string;
    media_alt: string;
    url: string;
  };
};

function ListingBox({ product: { url, media_url } }: ProductsType) {
  return (
    <Link
      to={url}
      target="_blank"
      className="listing-box"
      style={{ backgroundImage: `url("${media_url}")` }}
    >
      <span>Inbouw <img src={linkArrow} alt="inbouw" /></span>
    </Link>
  );
}
export default ListingBox;
