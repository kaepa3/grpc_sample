import React, { Component } from 'react'
import { connect, useSelector} from 'react-redux'

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
  const count = useSelector((state: any) => state.count)
  const posts = useSelector((state: any) => state.names)
  return (
    <div>
      "class return":{count};
      <ul>
        {posts.map((post: string) => (
          <li>{post}</li>
        ))}
      </ul>
    </div>
  )
}
export default SampleClass;
