import React from 'react'
import PropTypes from 'prop-types'

const TestComponent = ({ testData, getKeyAtClick }) => {
  const mappedFromFirstReducer = testData.map((val, key) => (
    <p key={key} onClick={() => getKeyAtClick(key)}>
      {val}
    </p>
  ))
  return (
    <>
      <button>
        <u>
          i'm a React Component and placed at{' '}
          <strong>components/TestComponent</strong>
        </u>
        {mappedFromFirstReducer}
      </button>
      <button>{`<<`} click at words for get their keys</button>
    </>
  )
}

export default TestComponent

TestComponent.propTypes = {
  testData: PropTypes.array,
  getKeyAtClick: PropTypes.func,
}
