import React, { useState } from 'react'
import Board from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

export default function ArcExample() {

  const [ brickSize, setBrickSize ] = useState(24)

  const lineComponent = (
    <Board width={500} height={500}>
      <Board.Arc bs={brickSize} center={[10, 3]} vAxis={4} hAxis={5} start={Math.PI} stop={Math.PI * .5} />
    </Board>
  )

  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Arc" />)

  const ownProps = {
    'points': ['Array[ [x1, y1] , [x2, y1], ... ]', '-', true]
  }

  return (
    <ExampleLayout
      title="Arc Component"
      description="An arc is just a **section** of an ellipse controlled by the additional `start` and `stop` props which represent the angle of the arc, also you can _'close'_ the arc form by these 2 points with the `filled` prop set to true"
      component={lineComponent}
      code={codeExample}
      componentProps={ownProps}
      controls={lineControls}
    />
  )
}
