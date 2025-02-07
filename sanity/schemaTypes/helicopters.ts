export default {
  name: "helicopter",
  title: "Helicopter",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Name of the helicopter",
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      description: "Upload the main image of the helicopter",
      options: {
        hotspot: true,
      },
    },
    // {
    //   name: "additionalImages",
    //   title: "Additional Images",
    //   type: "array",
    //   of: [{ type: "image", options: { hotspot: true } }],
    //   description: "Upload additional images of the helicopter",
    // },
    {
      name: "price",
      title: "Price (USD)",
      type: "number",
      description: "Price of the helicopter in USD",
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      description: "A brief overview of the helicopter",
    },
    {
      name: "details",
      title: "Detailed Description",
      type: 'blockContent',
      description: "A more detailed description with headings and paragraphs",
    },
    {
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "Key features of the helicopter",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      description: "Category of the helicopter (e.g., Rental, Sale, etc.)",
    },
    {
      name: "stockLevel",
      title: "Stock Level",
      type: "number",
      description: "Number of units available in stock",
    },
    {
      name: "capacity",
      title: "Passenger Capacity",
      type: "number",
      description: "Number of passengers the helicopter can carry",
    },
    {
      name: "isFeatured",
      title: "Is Featured?",
      type: "boolean",
      description: "Indicates whether this helicopter is a featured product",
    },
  ],
};
