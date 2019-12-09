import React from 'react'

import snippets from './snippets'
import LineExample from './examples/LineExample'
import LinearPathExample from './examples/LinearPathExample'
import CircleExample from './examples/CircleExample'
import ImageExample from './examples/ImageExample'
import RectangleExample from './examples/RectangleExample'
import PolygonExample from './examples/PolygonExample'
import EllipseExample from './examples/EllipseExample'
import ArcExample from './examples/ArcExample'
import BezierCurveExample from './examples/BezierCurveExample'

export default function App() {

  return (
    <div className="content">
      <section className="container mx-auto hero h-64 mt-5">
        <div className="min-h-full flex text-center">
          <div className="flex-1 self-center hero-react">
            <p>React</p>
          </div>
          <div className="flex-1 self-start">
            <img className="self-center legra-logo mx-auto" src="/react-legra-site/react-site.png" alt="legrajs & reactjs" height="200" />
          </div>
          <div className="flex-1 self-center hero-legra">
            <p>Legra</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20">
        <div className="flex">
          <div className="flex-none">
            <img className="rl-icon" src="/react-legra-site/favicon.png" alt="legra icon" width="45" />
          </div>
          <h1>React legra</h1>
        </div>
        <div className="description">
          <p>
            This lib is a react wrapper around <a href="https://legrajs.com">LegraJS</a>,
            so far the api is very similar and we'll try to add a little bit more functionality over the time
          </p>
        </div>
        <hr />
        <div className="installation">
          <h2>Installation</h2>
          <pre className="language-bash">
            <code>
              yarn add react-legra
            </code>
          </pre>
        </div>
        <div className="installation">
          <h2>Usage</h2>
          <p>
            To start drawing, you first need to create a canvas to draw on,
            the <code className="language-jsx">{"<Board />"}</code> component will do that for you.
          </p>
          <p>
            The <code className="language-jsx">{"<Board />"}</code> component recieve the same props as a `canvas` element,
            and additionally you can set the <b>canvas</b> prop, to reference all the drawing to an external canvas
          </p>
          <p>
            All the components but <code className="language-jsx">{"<Board />"}</code>,
            recieve (optionally) some configuration props:
          </p>
          <pre className="language-js default-props">
            <code>
            {snippets.ConfigProps}
            </code>
          </pre>
        </div>
      </section>
      <section className="container mx-auto mt-10">
        <h2>Components</h2>
        <div className="components-samples">
          <div className="block my-10">
            <LineExample />
          </div>
          <div className="block my-10">
            <LinearPathExample />
          </div>
          <div className="block my-10">
            <CircleExample />
          </div>
          <div className="block my-10">
            <ImageExample />
          </div>
          <div className="block my-10">
            <RectangleExample />
          </div>
          <div className="block my-10">
            <PolygonExample />
          </div>
          <div className="block my-10">
            <EllipseExample />
          </div>
          <div className="block my-10">
            <ArcExample />
          </div>
          <div className="block my-10">
            <BezierCurveExample />
          </div>
        </div>
      </section>
    </div>
  )
}
