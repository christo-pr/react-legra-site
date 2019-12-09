import React, { useState } from 'react'
import Board from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

function LineBasicExample () {
  const [ brickSize, setBrickSize ] = useState(24)

  const lineComponent = (
    <Board width="500" height="500">
      <Board.Line from={[1, 1]} to={[4, 4]} bs={brickSize} options={{ color: 'green' }} />
    </Board>
  )

  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Line" />)

  const ownProps = {
    'from': ['Array[x, y]', '-', true],
    'to': ['Array[x, y]', '-', true]
  }

  return (
    <ExampleLayout
      title="Line Component"
      description={`
        Draw a line from point <strong>a<strong> <i>(x1, y1)</i>
        to point <strong>b<strong> <i>(x2, y2)</i>
      `}
      component={lineComponent}
      code={codeExample}
      componentProps={ownProps}
      controls={lineControls}
    />
  )
}

export default LineBasicExample
