import { useLocation } from "react-router-dom";
import { MobileSection, WebSection } from "../components/organisms";
import { Layout } from "../components/templates/layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const ServicesPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Bantutech Labs | Services</title>
      </Helmet>
      <Layout>
        <section className="mt-20 px-4 lg:px-40">
          <MobileSection />
          <WebSection />
        </section>
      </Layout>
    </>
  );
};

export default ServicesPage;
