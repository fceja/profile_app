import "@scss/components/logo/Logo.scss";
import { LogoData } from "@data/LogoData";
import SetScrollVar from "@utils/pageActions/SetScrollVar";

const Logo = () => {
  SetScrollVar();

  return (
    <div className="img-logo-container">
      <img
        className="img-logo-hero"
        src={LogoData.original}
        alt={LogoData.alt}
      />
    </div>
  );
};

export default Logo;
