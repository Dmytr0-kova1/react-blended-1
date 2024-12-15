import { BiDollarCircle } from 'react-icons/bi';
import style from './ForbesListItem.module.css';
import { FcBullish, FcBearish } from 'react-icons/fc';

const ForbesListItem = ({ avatar, name, capital, isIncrease }) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt="Mark Zuckerberg" />
      <h3 className={style.title}>{name}</h3>
      <span className={style.capital}>
        {capital} <BiDollarCircle color="#2196f3" size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </>
  );
};

export default ForbesListItem;
