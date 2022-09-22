import toast from "react-hot-toast";

import { copyComponentCode } from "@/utils/copyComponentCode";

import { Button } from "@/components/Button";
import { PrimaryLayout } from "@/layouts/PrimaryLayout";

import { Page } from "@/types/Page";

const HomePage: Page = () => {
  const handleCopy = async (component: string) => {
    try {
      await copyComponentCode(component);

      toast.success("Code copied successfully");
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div>
      <div className="mb-2">
        <h1 className="text-3xl font-bold">UI Kit</h1>
        <p className="text-red-600 font-semibold">
          Учти что здесь используется TailwindCSS, и все элементы отображаются
          со сброшенными стилями
        </p>
      </div>

      <div className="p-3 border rounded-md">
        <h2 className="text-xl mb-2">Button</h2>

        <Button onClick={() => handleCopy("Button.tsx")}>
          Copy button code
        </Button>
      </div>
    </div>
  );
};

HomePage.getLayout = (page) => <PrimaryLayout>{page}</PrimaryLayout>;

export default HomePage;