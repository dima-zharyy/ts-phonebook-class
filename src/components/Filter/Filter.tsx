import { nanoid } from "nanoid";
import css from "./Filter.module.css";
import { IFilter } from "../../types/appTypes";

export const Filter: React.FC<IFilter> = ({ onChange, value }) => {
  const filterId = nanoid(5);
  return (
    <div className={css.filterWrap}>
      <label className={css.filterLabel} htmlFor={filterId}>
        Find contacts by name
      </label>
      <input
        className={css.filterInput}
        type="text"
        id={filterId}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
