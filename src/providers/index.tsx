import { ModalProvider } from "./modaisProvider";

interface Providertypes {
  children: React.ReactNode;
}

const Providers = ({ children }: Providertypes) => {
  return <ModalProvider>{children}</ModalProvider>;
};
export default Providers;
