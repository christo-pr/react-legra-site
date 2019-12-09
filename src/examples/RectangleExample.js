import React, { useState } from 'react'
import Board, { Rectangle } from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

export default function RectangleExample() {
  const [ brickSize, setBrickSize ] = useState(24)

  const lineComponent = (
    <Board width={500} height={500}>
      <Rectangle bs={brickSize} start={[5, 3]} width={5} height={12} options={{ filled: true }}/>
    </Board>
  )

  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Rectangle" />)

  const ownProps = {
    'start': ['Array[x, y]', '-', true],
    'width': ['Integer', '-', true],
    'height': ['Integer', '-', true]
  }

  return (
    <ExampleLayout
      title="Rectangle Component"
      description="Draw a rectangle given the top-left coordenates [x, y] (`start`) as the center point and with the specified `width` and `height`."
      code={codeExample}
      componentProps={ownProps}
      component={lineComponent}
      controls={lineControls}
    />
  )
}
