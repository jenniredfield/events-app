import React from "react";

function SocialMediaLink({ platform, url, target }) {
  return (
    <a
      className="artist-detail-card__social-media-link"
      href={url}
      target={target}
      aria-label={`${platform}_link`}
    >
      <p hidden>{platform}</p>
      <i className={`fa fa-${platform}`} aria-hidden="true" />
    </a>
  );
}

export default SocialMediaLink;