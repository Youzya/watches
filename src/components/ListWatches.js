import ItemWatch from './ItemWatch'
import PropTypes from 'prop-types'

export default function ListWatches({list, onRemove}) {
    return (
        <div className="row align-items-start p-3 g-3">
                {list.map(watch => <ItemWatch key={watch.id} watch={watch} onRemove={onRemove} />)}
        </div>
    )
}

ListWatches.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
    onRemove: PropTypes.func
}