import Button from "~/components/Button";

type heroBannerDataTypes = {
  heroBannerData: {
    markdown_content: string;
    media: [{ media_url: string; media_alt: string }];
    urls: [{ url: string; name: string; target: string; code: string }];
    configuration: { height: number };
  };
};

function HeroBanner(heroBanner: heroBannerDataTypes) {
  return (
    <div
      className="hero-banner"
      style={{
        backgroundImage: `url(${heroBanner.heroBannerData.media[0].media_url})`,
        minHeight: 500,
      }}
    >
      <div className="hero-banner__content">
        <h1>
          {heroBanner.heroBannerData.markdown_content
            .split(/\r?\n/)[0]
            .replace("## ", "")}
        </h1>
        <p>{heroBanner.heroBannerData.markdown_content.split(/\r?\n/)[1]}</p>
        {heroBanner.heroBannerData.urls.map((e) => (
          <Button
            key={e.code}
            url={e.url}
            title={e.name}
            type="hero-banner-button"
          />
        ))}
      </div>
    </div>
  );
}
export default HeroBanner;
