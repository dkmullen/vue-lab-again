export const validationRules = {
  email: [
    (v) =>
      !v || /^[a-zA-Z0-9_.+&\\-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(v) || "Email must be valid",
  ],
  ssn: [
    (v) =>
      !v ||
      /^(?!(000|666|9))\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/.test(v) ||
      "Please enter a valid SSN.",
    (v) => !v || (v && v.length === 11) || "Please enter a valid SSN.",
  ],
  zip5: [
    (v) => /^\d+$/.test(v) || "Please enter the five-digit zip code.",
    (v) => (v && v.length === 5) || "Please enter the five-digit zip code.",
  ],
  zip: [
    (v) =>
      !v || /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(v) || "Please enter a five or nine-digit zip code.",
    // (v) =>
    //   (v && v.length === 10) || 'Please enter the nine-digit zip code.',
  ],
  phone: [
    (v) =>
      !v ||
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(v) ||
      `Enter a ten-digit number - xxx-xxx-xxxx`,

    // Ten digits plus characters inserted by the mask
    (v) => !v || v.length === 12 || `Enter a ten-digit number - xxx-xxx-xxxx`,
  ],
  requiredRule: [(v) => !!v || "This field is required."],
  fname: [(v) => !v || /^[A-Za-z'-]+$/.test(v) || "Contains invalid characters"],
  lname: [
    // Also needs apostrophe even tho specs don't call for it (O'Brien)
    (v) => !v || /^[A-Za-z.'-]+$/.test(v) || "Contains invalid characters",
  ],
  suffix: [
    // Calls for Roman numbers, which I assume is limited to allowing caps
    (v) => !v || /^[A-Za-z.-]+$/.test(v) || "Contains invalid characters",
  ],
  address: [
    // Needs # and . too
    (v) => !v || /^[A-Za-z0-9' -#.]+$/.test(v) || "Contains invalid characters",
  ],
  city: [(v) => !v || /^[\p{L}A-Za-z0-9' -]+$/u.test(v) || "Contains invalid characters"],
  permissive: [
    (v) =>
      !v ||
      /^(?!.*[<>{}[\]`\\])(?!.*<\/?)(?!.*=>)[\p{L}\p{N}\p{P}\p{S}\p{Zs}\r\n]+$/u.test(v) ||
      "Contains invalid characters",
  ],
};
