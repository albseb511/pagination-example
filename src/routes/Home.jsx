import React from 'react'
import {connect} from 'react-redux'
import {fetchData, changePage} from '../redux/action'
import Pagination from '../components/Pagination'
import Data from '../components/Data'

const Home = ({
  isLoadng,
  fetchData
}) => {
  // highly recommend creating a seperate component

  return (
    <div>
      {isLoadng && 'loading'}
      <Pagination />
      <Data />
      <button onClick={fetchData}>GET DATA</button>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  fetchData: ()=>dispatch(fetchData()),
})

export default connect(null, mapDispatchToProps)(Home)
