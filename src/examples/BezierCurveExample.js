import React, { useState } from 'react'
import Board, { BezierCurve } from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

export default function BezierCurveExample() {
  const [ brickSize, setBrickSize ] = useState(10)

  const lineComponent = (
    <Board width="500" height="500">
      <BezierCurve
        bs={brickSize}
        from={[10,5]}
        to={[20, 20]}
        controlPointX={[8, 30]}
        controlPointY={[18, 1]}
      />
    </Board>
  )

  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Bezier" />)

  const ownProps = {
    'from': ['Array[x, y]', '-', true],
    'to': ['Array[x, y]', '-', true],
    'controlPointX': ['Array[x, y]', '-', true],
    'controlPointY': ['Array[x, y]', '-', true],
  }

  return (
    <ExampleLayout
      title="Bézier Component"
      description="Draws a bézier curve from `(x1, y1)` to `(x2, y2)` with `(cp1x, cp1y)` and `(cp2x, cp2y)` as the curve's control points."
      component={lineComponent}
      code={codeExample}
      componentProps={ownProps}
      controls={lineControls}
    />
  )
}
