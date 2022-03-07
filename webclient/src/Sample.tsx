import React, { Component } from 'react'
import { connect, useSelector } from 'react-redux'
import { RootState } from './Store'

type Props = {
  text: string
}

export const Sample: React.FC<Props> = ({ children, text }) => (
  <div>
    <div>{text}</div>
    <div>{children}as</div>
  </div>
);

function SampleClass() {
  const counterSelector = useSelector((state: RootState) => state.counterReducer)
  return (
    <div>
      "class return":{counterSelector.count};
      <ul>
        {counterSelector.names.map((name: string) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}
export default SampleClass;
