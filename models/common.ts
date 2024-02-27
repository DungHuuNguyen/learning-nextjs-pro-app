import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

// kdl NextPage là kdl đại diện cho một trang trong NextJS, và phần sau là mở rộng thêm 1 thuộc tính Layout: là 1 fnc nhận vào 1 một đối số props có kiểu LayoutProps trả về 1 phần tử ReactElement
export type NextPageWithLayout = NextPage & {
  Layout?: (props: LayoutProps) => ReactElement;
};

//tương tự export kdl mới tên AppPropsWithLayout có KDL như AppProps <KDL được sd bởi CPN App trong NextJS> mở rộng thêm thuộc tính Component có kdl NextPageWithLayout => cho phép sd một layout cụ thể cho toàn App
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
