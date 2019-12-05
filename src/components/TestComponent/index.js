import React from 'react'

const TestComponent = ({ testData }) => {
  return (
    <>
      <br />
      <u>get data from store (some Reducer)</u>
      {testData.map((e, k) => (
        <p key={k}>{e}</p>
      ))}
    </>
  )
}

export default TestComponent
