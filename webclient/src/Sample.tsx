import React, {Component} from 'react'

type Props = {
  text:string
}

export const Sample: React.FC<Props> = ({children, text}) => (
  <div>
    <div>{text}</div>
    <div>{children}as</div>
  </div>
);

export default class SampleClass extends Component {
  render(){
    return (
    "class return"
    )
  }
}
