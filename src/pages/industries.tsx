import { useLocation } from "react-router-dom";
import { IndustriesContent } from "../components/organisms";
import { Layout } from "../components/templates/layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Industries = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Bantutech Labs | Industries</title>
      </Helmet>
      <Layout>
        <IndustriesContent />
      </Layout>
    </>
  );
};

export default Industries;
