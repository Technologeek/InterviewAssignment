import React from 'react'
import { connect } from 'react-redux'
import { PhotoCard } from '../components/Photocard/PhotoCard'

class Favorites extends React.Component {

  render() {
    return <PhotoCard data={this.props.data} />
  }
}

const mapStateToProps = ({ favorites }) => {
  const { data, loading } = favorites
  return {
    data,
    loading
  }
}
export default connect(mapStateToProps)(Favorites)