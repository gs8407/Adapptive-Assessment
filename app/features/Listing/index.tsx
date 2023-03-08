import { Link } from "@remix-run/react";
import ListingBox from "~/components/ListingBox";
import { isMobile } from "react-device-detect";
import ButtonAllCategoriesMobile from "~/components/ButtonAllCategoriesMobile";
import Slider from "react-slick";

type ListingDataTypes = {
  title?: string;
  listingData: [
    {
      product_tag: {
        name: string;
        media_url: string;
        media_alt: string;
        url: string;
      };
    }
  ];
};

function Listing({ listingData }: ListingDataTypes) {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: "60px",
  };

  return (
    <div className="listing-boxes">
      <div className="top-bar">
        <h4>Onze categorieen</h4>
        {!isMobile && (
          <Link className="listing-boxes__link" to="/">
            Bekijk alle categorieen
          </Link>
        )}
      </div>
      {!isMobile ? (
        <div className="listing">
          {listingData.map((e, index) => (
            <ListingBox key={index} product={e.product_tag} />
          ))}
        </div>
      ) : (
        <div className="mobile-listing">
          <Slider {...settings}>
            {listingData.map((e, index) => (
              <ListingBox key={index} product={e.product_tag} />
            ))}
          </Slider>
        </div>
      )}
      {isMobile && <ButtonAllCategoriesMobile />}
    </div>
  );
}
export default Listing;
