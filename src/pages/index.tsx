import { GetStaticProps } from "next";

import { getAllComponents } from "@/api/getAllComponents";

import { ComponentPanel } from "@/components/ComponentPanel";
import { PrimaryLayout } from "@/layouts/PrimaryLayout";

import { Component } from "@/types/Component";
import { Page } from "@/types/Page";

type HomePageProps = {
  components: Component[];
};

const HomePage: Page<HomePageProps> = ({ components }) => {
  return (
    <div>
      <div className="mb-2">
        <h1 className="text-3xl font-bold">Code Snippets w/ Copy button</h1>
        <p className="text-red-600 font-semibold">
          I used awesome TailwindCSS on this website, so take into account that
          all components are with resetted styles. They do not have their own
          styles.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Components</h2>
        {components.map((component) => (
          <ComponentPanel key={component.name} component={component} />
        ))}
      </div>
    </div>
  );
};

HomePage.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export const getStaticProps: GetStaticProps = async () => {
  const components = await getAllComponents();

  return {
    props: {
      components,
    },
  };
};

export default HomePage;
