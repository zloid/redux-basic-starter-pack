import { connect } from 'react-redux'
import TestComponent from '../components/TestComponent'

const mapStateToProps = state => ({
  testData: state.firstReducer.testData,
})

export default connect(mapStateToProps)(TestComponent)
