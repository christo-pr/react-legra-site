import React from 'react'

function ExampleLayout(props) {
  const { component, title, componentProps = {}, description, code, controls } = props

  return (
    <div className="w-full lg:flex justify-between">
      <div className="code-card border border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="border-l-4 border-blue-700 text-black p-4" role="alert">
            <h4 className="font-bold text-2xl mb-2">{title}</h4>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
          <table className="table-props">
            <thead>
              <tr>
                <th>prop</th>
                <th>type</th>
                <th>default</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(componentProps).map(p => {
                  return (
                    <tr key={p}>
                      <td align="center">
                        {p}
                        {
                          componentProps[p][2] &&
                          (<strong><small> (required)</small></strong>)
                        }
                      </td>
                      <td align="center">{componentProps[p][0]}</td>
                      <td align="center">{componentProps[p][1]}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          {code}
        </div>
      </div>
      <div className="flex-none bg-cover overflow-hidden ml-8">
        {controls}
        <div className="border border-blue-700">
          {component}
        </div>
      </div>
    </div>
  )
}

export default ExampleLayout
