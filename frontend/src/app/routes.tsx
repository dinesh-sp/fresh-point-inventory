import { RouteObject } from "react-router-dom";
import { TodoForm } from "../features/todos/TodoForm";
import { TodoList } from "../features/todos/TodoList";
import * as Menu from "../features";

const InRoutes: RouteObject[] = [
  {
    path: "/material",
    element: <Menu.Material />,
    handle: {
      label: "Material",
      menu: false,
    },
  },
  {
    path: "/product_type",
    element: <Menu.Product_type />,
    handle: {
      label: "Product Type",
      menu: false,
    },
  },
  {
    path: "/caliber",
    element: <Menu.Caliber />,
    handle: {
      label: "Caliber",
      menu: false,
      type: "button",
    },
  },
  {
    path: "/category",
    element: <Menu.Category />,
    handle: {
      label: "Caliber",
      menu: false,
      type: "button",
    },
  },
  {
    path: "/category_type",
    element: <Menu.Category_type />,
    handle: {
      label: "Category Type",
      menu: false,
      type: "button",
    },
  },
  {
    path: "/expenses_type",
    element: <Menu.Expenses_type />,
    handle: {
      label: "Expenses Type",
      menu: false,
      type: "button",
    },
  },
  {
    path: "/product",
    element: <Menu.Product />,
    handle: {
      label: "Product",
      menu: false,
      type: "button",
    },
  },
  {
    path: "/batch",
    element: <Menu.Batch />,
    handle: {
      label: "Batch",
      menu: false,
      type: "button",
    },
  },
  {
    path: "/stock",
    element: <Menu.Stock />,
    handle: {
      label: "Stock",
      menu: false,
      type: "button",
    },
  },
  {
    path: "/algorithm",
    element: <Menu.Algorithm />,
    handle: {
      label: "Stock",
      menu: false,
      type: "button",
    },
  },
];

export const Routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <>
        <TodoForm />
        <TodoList />
      </>
    ),

    handle: {
      label: "Dashboard",
      menu: true,
      type: "button",
    },
  },
  {
    path: "/daily-cash-flow",
    element: <Menu.cashflow />,
    handle: {
      label: "cash-flow",
      menu: true,
      type: "button",
    },
  },
  {
    path: "/transaction",
    element: <Menu.Transaction />,
    handle: {
      label: "Transaction",
      menu: true,
      type: "button",
    },
  },
  {
    path: "/expenses",
    element: <Menu.Expenses />,
    handle: {
      label: "Expenses",
      menu: true,
      type: "button",
    },
  },
  {
    path: "/config",
    element: <Menu.Config />,
    handle: {
      label: "Config",
      menu: true,
      type: "button",
      children: [
        {
          label: "Stock",
          path: "/stock",
        },
        {
          label: "Caliber",
          path: "/caliber",
        },
      ],
    },
  },
  ...InRoutes,
];
