import React, { useState } from 'react'
import Board, { LinearPath } from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

export default function LinearPathExample() {
  const [ brickSize, setBrickSize ] = useState(24)

  const lineComponent = (
    <Board width="500" height="500">
       <LinearPath bs={brickSize} points={[[2, 1], [12, 1], [1, 10], [12, 10]]} />
    </Board>
  )

  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Linear" />)

  const ownProps = {
    'points': ['Array[ [x1, y1], [x2, y2], ... ]', '-', true]
  }

  return (
    <ExampleLayout
      title="Linear Path Component"
      description={`
        Draw a set of lines connecting the specified points.
        <i>points</i> is an array of arrays of points <i>(x, y)</i>.
      `}
      code={codeExample}
      componentProps={ownProps}
      component={lineComponent}
      controls={lineControls}
    />
  )
}
