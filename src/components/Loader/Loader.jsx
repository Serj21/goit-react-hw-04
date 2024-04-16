import { MutatingDots } from "react-loader-spinner";
import style from "./loader.module.css";
const Loader = () => {
  return (
    <div className={style.loader}>
      <MutatingDots
        type="Oval"
        color="rgb(5, 5, 184)"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;
