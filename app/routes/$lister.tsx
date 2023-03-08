import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import categoryListing from "~/styles/category-listing.css";
import Listing from "~/features/Listing";

export function links() {
  return [{ rel: "stylesheet", href: categoryListing }];
}

export const loader = async ({ params }: LoaderArgs) => {
  try {
    const res = await fetch(
      `https://tom-sandbox.bettywebblocks.com/${params.lister}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    if (err) {
      return redirect("/");
    }
  }
};

export const meta: MetaFunction = ({
  data: { meta_title, meta_description },
}: {
  data: { meta_title: string; meta_description: string };
}) => {
  return {
    title: meta_title,
    description: meta_description,
  };
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  const ListingData =
    data.groups[0].elements[0].linked_product_tag_groups[0].product_tag_group
      .linked_product_tags;

  return (
    <>
      <Listing listingData={ListingData} />
    </>
  );
}
