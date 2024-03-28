import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import HeroBanner from "~/features/HeroBanner";

import Listing from "~/features/Listing";

import stylesHeroBanner from "~/styles/hero-banner.css";
import stylesHeroBannerButtons from "~/styles/button.css";
import categoryListing from "~/styles/category-listing.css";

export function links() {
  return [
    { rel: "stylesheet", href: stylesHeroBanner },
    { rel: "stylesheet", href: stylesHeroBannerButtons },
    { rel: "stylesheet", href: categoryListing },
  ];
}

export const loader = async ({ params }: LoaderArgs) => {
  const res = await fetch(`https://tom-sandbox.bettywebblocks.com/home`);
  const data = await res.json();
  return data;
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const heroBannerData = data.groups[0].elements[0];
  const ListingMarkdown = data.groups[1].elements[0].markdown_content;
  const ListingData =
    data.groups[1].elements[0].linked_product_tag_groups[0].product_tag_group
      .linked_product_tags;

  return (
    <>
      <p>This is testing!</p>
      <HeroBanner heroBannerData={heroBannerData} />
      <Listing title={ListingMarkdown} listingData={ListingData} />
    </>
  );
}