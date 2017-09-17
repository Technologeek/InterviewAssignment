import React from 'react'
import { connect } from 'react-redux'
import { PhotoCard } from '../components/Photocard/PhotoCard'
import { fetchDataIfNeeded, addAsFavorite } from '../actions'

class List extends React.Component {
    constructor() {
        super()
        this.handleMarkFavorite = this.handleMarkFavorite.bind(this);
    }

    componentWillMount() {
        const { dispatch } = this.props
        dispatch(fetchDataIfNeeded());
    }

    handleMarkFavorite(id) {
        const { dispatch } = this.props;
        dispatch(addAsFavorite(id));
    }

    render() {
        return <PhotoCard data = { this.props.data } markFavorite = { this.handleMarkFavorite }
        />
    }
}

const mapStateToProps = ({ favorites }) => {
    const { data, loading } = favorites
    return {
        data,
        loading
    }
}
export default connect(mapStateToProps)(List)