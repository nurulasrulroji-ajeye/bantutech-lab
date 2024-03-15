import React, { useEffect } from "react";
import { AboutContent } from "../components/organisms";
import { Layout } from "../components/templates/layout";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

const AboutPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <React.Fragment>
      <Helmet>
        <title>Bantutech Labs | About</title>
      </Helmet>
      <Layout>
        <AboutContent />
      </Layout>
    </React.Fragment>
  );
};

export default AboutPage;
