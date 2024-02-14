import { ListingItemInterface } from '../../models/listingInterface';
import ListingItem from '../listingItem/ListingItem';
import './listing.css'

interface Props {
  items: (ListingItemInterface | undefined)[];
}

const Listing = ({ items }: Props) => {
  return (
    <div className='wrapper'>
      <div className='item-list'>
        {items.map((item) => (
          <ListingItem item={item} key={item?.listing_id} />
        ))}
      </div>
    </div>
  )
}

export default Listing