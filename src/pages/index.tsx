import { GetStaticProps } from "next";

import { getAllComponents } from "@/api/getAllComponents";
import { getAllUtils } from "@/api/getAllUtils";

import { ComponentPanel } from "@/components/ComponentPanel";
import { UtilPanel } from "@/components/UtilPanel";
import { PrimaryLayout } from "@/layouts/PrimaryLayout";

import { Component } from "@/types/Component";
import { Page } from "@/types/Page";
import { Util } from "@/types/Util";

type HomePageProps = {
  components: Component[];
  utils: Util[];
};

const HomePage: Page<HomePageProps> = ({ components, utils }) => {
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

      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Components</h2>
          {components.map((component) => (
            <ComponentPanel key={component.name} component={component} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Utils</h2>
          {utils.map((util) => (
            <UtilPanel key={util.name} util={util} />
          ))}
        </div>
      </div>
    </div>
  );
};

HomePage.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export const getStaticProps: GetStaticProps = async () => {
  const [components, utils] = await Promise.all([
    getAllComponents(),
    getAllUtils(),
  ]);

  return {
    props: {
      components,
      utils,
    },
  };
};

export default HomePage;
