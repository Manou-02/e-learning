import { ConfigProvider } from "antd";
import locale from "antd/locale/fr_FR";
import { Navbar } from "@/shared/layout/navbar/NavBar";
import { Outlet } from "react-router-dom";
import { MainLayout } from "@shared/layout/mainLayout/MainLayout";
// import { Color } from "@/shared/config/Color";

export const BaseLayout = (
  <ConfigProvider
    locale={locale as any}
    // theme={{
    //   token: {
    //     colorPrimary: Color.PRIMARY,
    //   },
    //   components: {
    //     Tabs: {
    //       colorPrimary: Color.PRIMARY,
    //       colorPrimaryActive: Color.SECONDARY,
    //       colorPrimaryText: Color.PRIMARY,
    //       colorPrimaryHover: "Color.PRIMARY",
    //       borderRadius: 8,
    //       borderRadiusLG: 12,
    //     },
    //     Button: {
    //       colorPrimary: Color.PRIMARY,
    //       colorPrimaryActive: Color.GRAY,
    //     },
    //   },
    // }}
  >
    <div className="flex">
      <div className="w-full">
        <Navbar />
        <MainLayout>
          <Outlet />
        </MainLayout>
      </div>
    </div>
  </ConfigProvider>
);
