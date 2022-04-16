const products = [
  {
    name: "Ginger Melt Oil Cleanser",
    type: "oil cleanser",
    brand: "Peach & Lily Collection",
    price: 29,
    volume: "150ML",
    skinConcerns: [
      "acne",
      "dryness",
      "pores",
      "sensitivity",
      "redness",
      "blackheads",
      "dullness",
      "oiliness",
    ],
    skinTypes: ["Dry", "Normal", "Oily", "Combination"],
  },
  {
    name: "Cellup Micro Foam Cleanser",
    type: "water cleanser",
    brand: "lagom",
    price: 19,
    volume: "120ML",
    skinConcerns: ["acne", "blackheads", "oiliness", "pores"],
    skinTypes: ["normal", "oily"],
  },
  {
    name: "Raw Sauce",
    type: "toner",
    brand: "may coop",
    price: 43,
    volume: "120ML",
    skinConcerns: [
      "acne",
      "anti-aging",
      "oiliness",
      "dryness",
      "dullness",
      "Firmness",
      "fine lines/ wrinkles",
    ],
    skinTypes: ["dry", "normal", "oily"],
  },
  {
    name: "Essence with Lotus Leaf",
    type: "essence",
    brand: "the pure lotus",
    price: 64,
    volume: "125ML",
    skinConcerns: [
      "acne",
      "anti-aging",
      "oiliness",
      "dryness",
      "dullness",
      "Firmness",
      "fine lines/ wrinkles",
      "redness",
      "sensitivity",
    ],
    skinTypes: ["normal", "oily"],
  },
  {
    name: "Botanical Pore Serum",
    type: "serum",
    brand: "be the skin",
    price: 35,
    volume: "50ML",
    skinConcerns: [
      "acne",
      "blackheads",
      "oiliness",
      "pores",
      "sensitivity",
      "uneven skin texture",
    ],
    skinTypes: ["normal", "oily"],
  },
];

exports.getAll = () => {
  return products;
};

exports.getItem = (name) => {
  name = name.toLowerCase().split("-").join(" ");
  return products.find((product) => product.name.toLowerCase() === name);
};
