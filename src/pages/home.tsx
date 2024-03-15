import { useLocation } from "react-router-dom";
import {
  Hero,
  OurServices,
  Ourteams,
  WhyOurServices,
} from "../components/organisms";
import { Layout } from "../components/templates/layout";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Helmet>
        <title>Bantutech Labs</title>
      </Helmet>
      <Layout>
        <Hero />
        <OurServices />
        <WhyOurServices />
        <Ourteams />
      </Layout>
    </>
  );
};

export default HomePage;
