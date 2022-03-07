import React, { Component } from 'react'
import { connect, useSelector} from 'react-redux'
import { StoreTest } from './Store'

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
  const storeData = useSelector((state: StoreTest) => state)
  return (
    <div>
      "class return":{storeData.count};
      <ul>
        {storeData.names.map((name: string) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  )
}
export default SampleClass;
