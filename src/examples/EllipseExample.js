import React, { useState } from 'react'
import Board from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

export default function EllipseExample() {
 const [ brickSize, setBrickSize ] = useState(24)

  const lineComponent = (
    <Board width="500" height="500">
      <Board.Ellipse bs={brickSize} center={[8, 8]} vAxis={4} hAxis={7} />
    </Board>
  )

  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Ellipse" />)

  const ownProps = {
    'center': ['Array[x, y]', '-', true],
    'vAxis': ['Interger', '-', true],
    'hAxis': ['Interger', '-', true]
  }

  return (
    <ExampleLayout
      title="Ellipse Component"
      description={`Draw an ellipse from the <i>center</i> point
        and the horizontal and vertical axis lenght controlled by <i>hAxis</i> and <i>vAxis</i> props"
      `}
      code={codeExample}
      componentProps={ownProps}
      component={lineComponent}
      controls={lineControls}
    />
  )
}
