export interface ListingItemInterface {
  listing_id: number;
  url: string;
  MainImage: string;
  title: string;
  currency_code: string;
  price: string;
  quantity: number | null;
}