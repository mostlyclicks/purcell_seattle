exports.linkResolver = (doc) => {
  if (doc.type === "page") {
    return `/${doc.uid}`;
  }

  if (doc.type === "service") {
    return `/services/${doc.uid}`;
  }

  if (doc.type === "testimonial") {
    return `/testimonials/${doc.uid}`;
  }
};
