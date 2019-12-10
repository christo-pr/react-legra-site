import React, { useState } from 'react'
import Board, { Polygon } from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

export default function PolygonExample() {
  const [ brickSize, setBrickSize ] = useState(24)
  const vertices = [
    [3, 1],
    [3, 8],
    [10, 1],
    [10, 8]
  ]

  const lineComponent = (
    <Board width="500" height="500">
      <Polygon bs={brickSize} vertices={vertices} options={{ color: 'yellow' }} />
    </Board>
  )

  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Polygon" />)

  const ownProps = {
    'vertices': ['Array[ [x1, y1], [x2, y2] ]', '-', true]
  }

  return (
    <ExampleLayout
      title="Polygon Component"
      description="Draw a polygon with the given <i>vertices</i>"
      code={codeExample}
      componentProps={ownProps}
      component={lineComponent}
      controls={lineControls}
    />
  )
}
