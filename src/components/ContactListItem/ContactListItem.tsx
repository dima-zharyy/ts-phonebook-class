import { IListItem } from "../../types/appTypes";
import css from "./ContactListItem.module.css";

export const ContactListItem: React.FC<IListItem> = ({
  name,
  number,
  onClick,
}) => {
  return (
    <li className={css.contactItem}>
      <div className={css.contactWrap}>
        <span className={css.contactName}>{name}: </span> <span>{number}</span>
      </div>
      <button type="button" className={css.btn} onClick={onClick}>
        Delete
      </button>
    </li>
  );
};
