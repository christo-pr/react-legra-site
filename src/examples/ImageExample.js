import React, { useState } from 'react'
import Board, { Image } from 'react-legra'

import Controls from '../ui/Controls'
import CodeSnippet from '../ui/CodeSnippet'
import ExampleLayout from '../ui/ExampleLayout'

export default function ImageExample() {
  const [ brickSize, setBrickSize ] = useState(15)

  const lineComponent = (
    <Board width={500} height={500}>
       <Image src="/react-legra-site/cat.jpg" bs={8} width={500} height={500} />
    </Board>
  )

  // TODO: Add the controls, but render the img on each render, since now we 'clean' the canvas
  const lineControls = (<Controls value={brickSize} setValue={setBrickSize} />)

  const codeExample = (<CodeSnippet component="Image" />)

  const ownProps = {
    'src': ['String', '-', true],
  }

  return (
    <ExampleLayout
      title="Image Component"
      description="Draw an image with Legos!!!"
      code={codeExample}
      componentProps={ownProps}
      component={lineComponent}
    />
  )
}
