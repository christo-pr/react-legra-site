import React, { useState } from 'react'
import Board, { QuadraticCurve } from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

export default function QuadraticCurveExample() {
  const [ brickSize, setBrickSize ] = useState(10)

  const lineComponent = (
    <Board width="500" height="500">
      <QuadraticCurve
        bs={brickSize}
        from={[10,5]}
        to={[20, 20]}
        controlPoint={[8, 30, 18, 1]}
      />
    </Board>
  )

  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Quadratic" />)

  const ownProps = {
    'from': ['Array[x, y]', '-', true],
    'to': ['Array[x, y]', '-', true],
    'controlPoint': ['Array[x1, y1, x2, y2]', '-', true],
  }

  return (
    <ExampleLayout
      title="Quadratic Curve Component"
      description={`
        Draws a quadratic curve from <i>(x1, y1)</i> to <i>(x2, y2)</i>
        with <i>(cpx, cpy)</i> as the curve's control point.
      `}
      component={lineComponent}
      code={codeExample}
      componentProps={ownProps}
      controls={lineControls}
    />
  )
}
