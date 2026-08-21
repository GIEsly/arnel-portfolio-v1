import React from 'react'
import './innerRightContact.scss'

const InnerRightContact = ({ title, info }) => {
  // Determine the correct href and link behavior based on the title
  let href = "#";
  let isExternal = false;

  const lowerTitle = title.toLowerCase();

  if (lowerTitle === "email") {
    href = `mailto:${info}?subject=Inquiry%20from%20Website&body=Hi%20there,%20I%20saw%20your%20website%20and%20wanted%20to%20connect.`;
  } else if (lowerTitle === "phone") {
    // Remove spaces for proper phone dialing format
    href = `tel:${info.replace(/\s+/g, "")}`;
  } else if (lowerTitle === "github") {
    href = `https://github.com/${info}`;
    isExternal = true;
  } else if (lowerTitle === "linkedin") {
    // Ensures it handles paths starting with "in/" correctly
    const cleanPath = info.startsWith("/") ? info : `/${info}`;
    href = `https://www.linkedin.com${cleanPath}`;
    isExternal = true;
  }

  return (
    <div className="innerRightContact">
      <div className="contact-item">
        <span className="contact-title">{title}: </span>
        <a 
          href={href}
          className="contact-link"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {info}
        </a>
      </div>
    </div>
  );
}

export default InnerRightContact