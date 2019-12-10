const snippets = {
  Line: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {

      return (
        <Board>
          <Board.Line from={[1, 1]} to={[4, 4]} options={{ color: 'green' }} />
        </Board>
      )
    }
  `,
  Linear: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {

      return (
        <Board>
          <Board.Linear points={[[1, 1], [4, 1], [1, 4], [4, 4]]}/>
        </Board>
      )
    }
  `,
  Circle: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {

      return (
        <Board>
          <Board.Circle center={[3, 3]} radius={2} />
        </Board>
      )
    }
  `,
  Ellipse: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {

      return (
        <Board>
          <Board.Ellipse center={[8, 8]} vAxis={2} hAxis={3} />
        </Board>
      )
    }
  `,
  Image: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {

      return (
        <Board>
          <Board.Image src="/cat.jpg" bs={15} />
        </Board>
      )
    }
  `,
  Rectangle: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {

      return (
        <Board>
          <Rectangle start={[5, 3]} width={5} height={12} options={{ filled: true }}/>
        </Board>
      )
    }
  `,
  Polygon: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {
      const vertices = [
        [3, 1],
        [3, 8],
        [10, 1],
        [10, 8]
      ]

      return (
        <Board>
          <Board.Polygon vertices={vertices} options={{ color: 'yellow' }} />
        </Board>
      )
    }
  `,
  Arc: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {

      return (
        <Board>
          <Board.Arc
            center={[10, 3]}
            vAxis={4}
            hAxis={5}
            start={Math.PI}
            stop={Math.PI * .5}
           />
        </Board>
      )
    }
  `,
  Bezier: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {

      return (
        <Board>
          <Board.BezierCurve
            from={[10,5]}
            to={[20, 20]}
            controlPointX={[8, 30]}
            controlPointY={[18, 1]}
          />
        </Board>
      )
    }
  `,
  ConfigProps: `
    options: { // To control the look and feel of the component
      filled?: false,
      color?: blue
    },
    bs: 24 // Brick size, default to 24
  `,
  Quadratic: `
    import React from 'react'
    import Board from 'react-legra'

    function Example () {

      return (
        <Board>
          <Board.QuadraticCurve
            from={[10,5]}
            to={[20, 20]}
            controlPointX={[8, 30, 18, 1]}
          />
        </Board>
      )
    }
  `,
  ConfigProps: `
    options: { // To control the look and feel of the component
      color?: blue
    },
    bs: 24 // Brick size, default to 24
  `
}

export default snippets
