import { ModalProvider } from "./modaisProvider";
import { DataProvider } from "./dataProvider";

interface Providertypes {
  children: React.ReactNode;
}

const Providers = ({ children }: Providertypes) => {
  return (
    <DataProvider>
      <ModalProvider>{children}</ModalProvider>
    </DataProvider>
  );
};
export default Providers;
