import Star from '../star/Star'
import './stars.css'

interface Props {
  count: number
}

const Stars = ({ count }: Props) => {
  if (typeof (count) !== 'number') return;
  if (!(count > 0 || count < 6)) return;

  return (
    <ul className="card-body-stars u-clearfix">
      {[...Array(count)].map(() => <Star />)}
    </ul>
  )
}

export default Stars