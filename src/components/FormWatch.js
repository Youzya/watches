import AddWatch from "./AddWatch"
import ListWatches from "./ListWatches"
import {useState} from 'react'
import PropTypes from 'prop-types'

export default function FormWatch({initialState}) {
    const [list, setList] = useState(initialState)

    const handleAddWatch = (watch) => {
        setList(prevList => {
            return [...prevList.filter(el => el.id !== watch.id), watch]
        })
    }

    const handleDelete = (watch) => {
        setList(prevList => {
            return prevList.filter(el => { 
                if (watch.id === el.id) return false
                else return true
            })
        })
    }

    return (
        <div className='container mb-3' style={{width: '50vw', position: 'absolute', left: '50%', translate: '-50%'}}>
            <AddWatch onAddWatch={handleAddWatch} />
            <ListWatches list={list} onRemove={handleDelete} />
        </div>
    )
}

FormWatch.defaultProps = {
    initialState: []
}

FormWatch.propTypes = {
    initialState: PropTypes.array
}