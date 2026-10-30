import {
  AddShoppingCart,
  Category,
  SquareFoot,
  AccountTree,
  Euro,
  PostAdd,
  GroupWork,
  Leaderboard,
  Functions,
  Group,
} from "@mui/icons-material";

export const ConfigCards = [
  {
    id: 1,
    header: "Type",
    items: [
      // {
      //   id: 1,
      //   text: "Product Type",
      //   icon: AddShoppingCart,
      //   navigation: "/product_type",
      // },
      {
        id: 2,
        text: "Product Type",
        icon: AddShoppingCart,
        description: "Reselling, By-product, Drop Shipping",
        navigation: "/product_type",
      },
      {
        id: 3,
        text: "Expenses Type",
        description: "Maintains, Personal, Bill of Materials (BOM)",
        icon: Euro,
        navigation: "/expenses_type",
      },
    ],
  },
  {
    id: 2,
    header: "Inventory",
    items: [
      {
        id: 1,
        text: "Product",
        description: "Raw Products",
        icon: PostAdd,
        navigation: "/product",
      },
      {
        id: 2,
        text: "Batch",
        description: "Price Mapping",
        icon: GroupWork,
        navigation: "/batch",
      },
      {
        id: 3,
        text: "Algorithm",
        description: "Profit Calculation",
        icon: Functions,
        navigation: "/algorithm",
      },
    ],
  },
  {
    id: 3,
    header: "Products",
    items: [
      {
        id: 1,
        text: "material",
        description: "Un-Processed / Basic Substance",
        icon: Category,
        navigation: "/material",
      },

      {
        id: 2,
        text: "Stock",
        description: "product stocks",
        icon: AccountTree,
        navigation: "/stock",
      },
      {
        id: 3,
        text: "Supplier",
        description: "product stocks",
        icon: Group,
        navigation: "/stock",
      },
    ],
  },
  {
    id: 4,
    header: "Caliberation",
    items: [
      {
        id: 1,
        text: "Measuremnent",
        icon: SquareFoot,
        navigation: "/caliber",
      },
    ],
  },
  {
    id: 5,
    header: "Reports",
    items: [
      {
        id: 1,
        text: "Grids",
        description: "column mapping",
        icon: Leaderboard,
        navigation: "/",
      },
    ],
  },
];
