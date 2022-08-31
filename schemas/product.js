export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
    {
      name: "desription",
      title: "Desription",
      type: "string",
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [
        {
          type: "color",
          title: "Color",
          type: "string",
        },
      ],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
