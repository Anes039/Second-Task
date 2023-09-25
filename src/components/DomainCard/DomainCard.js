import Card from '../UI/Card';
import classes from './DomainCard.module.css';

const DomainCard = ({ domain, price, text }) => {
  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.card_container}>
          <div className={classes.domain}>{domain}</div>
          <div className={classes.price}>{price}</div>
          <div className={classes.text}>{text}</div>
          <button className={classes.btn}>
            Buy Now
          </button>
        </div>
      </div>
    </Card>
  );
}

export default DomainCard;
