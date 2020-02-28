import { connect } from 'react-redux'

import TestComponent from 'components/TestComponent'
import { getKeyAtClick } from 'actions'

const mapStateToProps = state => ({
  testData: state.firstReducer.testData,
})

const mapDispatchToProps = dispatch => ({
  getKeyAtClick: id => dispatch(getKeyAtClick(id)),
  // for test
  // getKeyAtClick: id => console.log(dispatch(getKeyAtClick(id))),
})

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
