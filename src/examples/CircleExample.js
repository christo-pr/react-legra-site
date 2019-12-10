import React, { useState } from 'react'
import Board, { Circle } from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

export default function CircleExample() {
  const [ brickSize, setBrickSize ] = useState(24)

  const lineComponent = (
    <Board width="500" height="500">
      <Circle bs={brickSize} center={[9, 8]} radius={4} />
    </Board>
  )

  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Circle" />)

  const ownProps = {
    'center': ['Array[x, y]', '-', true],
    'radius': ['Interger', '10']
  }

  return (
    <ExampleLayout
      title="Cricle Component"
      description="Draw a circle from the <i>center</i> point and with the given <i>radius</i>"
      component={lineComponent}
      code={codeExample}
      componentProps={ownProps}
      controls={lineControls}
    />
  )
}
