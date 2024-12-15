import { IconContext } from 'react-icons';
import style from './Statistics.module.css';

const StatisticsItem = ({ title, total, icon }) => {
  return (
    <>
      {
        <IconContext.Provider value={{ color: 'blue', size: '30px' }}>
          {icon}
        </IconContext.Provider>
      }
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
