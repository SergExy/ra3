import { ListingItemInterface } from "../../models/listingInterface";

interface Props {
  item: ListingItemInterface | undefined;
}

const getPrice = (price: string | undefined, code: string): string => {
  switch (code) {
    case 'USD':
      return '$' + price;
    case 'EUR':
      return '€' + price;

    default:
      return price + ' ' + code;
  }
}
const getQuantityClass = (quantity: number | null):string => {
  if (quantity === null || quantity < 10) return 'level-low'
  if (quantity > 10 && quantity < 21) return 'level-medium'
  
  return 'level-high'
}

const ListingItem = ({ item }: Props) => {
  if (item === undefined) return;

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{(item.title?.length > 50) ? `${item.title.slice(0, 49)}…` : item.title}</p>
        <p className="item-price">{getPrice(item.price, item.currency_code)}</p>
        <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>{item.quantity} left</p>
      </div>
    </div>
  )
}

export default ListingItem