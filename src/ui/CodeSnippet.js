import React from 'react'

import CODE_EXAMPLES from '../snippets'

function CodeSnippet(props) {
  const { component } = props

  const codeSample = CODE_EXAMPLES[component]

  return (
    <pre className="language-jsx">
      <code className="language-jsx">
        {codeSample}
      </code>
    </pre>
  )
}

export default CodeSnippet
