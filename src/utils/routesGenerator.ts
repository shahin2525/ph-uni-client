import { ReactNode } from "react";

type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

type TRoute = {
  path: string;
  element: ReactNode;
};

export const routesGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);

  return routes;
};
