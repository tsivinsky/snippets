import { ComponentPanel } from "@/components/helpers/ComponentPanel";
import { PrimaryLayout } from "@/layouts/PrimaryLayout";

import { Page } from "@/types/Page";

const HomePage: Page = () => {
  return (
    <div>
      <div className="mb-2">
        <h1 className="text-3xl font-bold">UI Kit</h1>
        <p className="text-red-600 font-semibold">
          Учти что здесь используется TailwindCSS, и все элементы отображаются
          со сброшенными стилями
        </p>
      </div>

      <ComponentPanel component="Button.tsx" />
    </div>
  );
};

HomePage.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export default HomePage;
