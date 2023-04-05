import { useEffect } from 'react'
import styled from 'styled-components'
import * as P from '@/styles/parts'
// import 'highlight.js/styles/monokai.css'
import hljs from 'highlight.js'

const All = styled.div`
  ${P.TransitionDefault}
  ${P.ShowTransition}
  width: calc(100% - 16px);
  padding: 8px 16px;
  border-radius: ${P.roundeds[0]};
  margin: 0;
  background: linear-gradient(0deg, var(--color-grey-975), var(--color-grey-875));
  font-weight: 400;
  overflow-x: auto;
  box-shadow:
    4px 4px 4px var(--color-grey-900-8)
  ;
  scrollbar-color: var(--color-grey-800) var(--color-grey-025);
  &::-webkit-scrollbar { width: 10px; height: 10px; }
  &::-webkit-scrollbar-button { display: none; }
  &::-webkit-scrollbar-track-piece { background: var(--color-grey-025); }
  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-800);
    border-radius: 0 0 10px 10px;
  }
  pre, code {
    padding: 0;
    margin: 0;
    color: var(--color-grey-025);
    font-family: var(--font-mono);
    font-size: ${P.fontSizes[2]};
    font-weight: 400;
  }
  .hljs { color: var(--color-grey-075); font-weight: 300; }
  .hljs-deletion { color: var(--color-red-100); }
  .hljs-addition { color: var(--color-blue-100); }
  .hljs-string { color: var(--color-orange-100); }
  .hljs-section { color: var(--color-wine-200); }
  .hljs-selector-class { color: var(--color-paleRed-100); }
  .hljs-selector-tag { color: var(--color-teal-100); }
  .hljs-selector-id { color: var(--color-orange-200); }
  .hljs-selector-class { color: var(--color-red-100); }
  .hljs-selector-attr { color: var(--color-paleRed-200); }
  .hljs-selector-pseudo { color: var(--color-red-100); }
  .hljs-template-variable { color: var(--color-purple-075); }
  .hljs-template-tag { color: var(--color-orange-075); }
  .hljs-params { color: var(--color-red-125);}
  .hljs-keyword { color: var(--color-red-200); font-weight: 600; }
  .hljs-function { color: var(--color-purple-200); }
  .hljs-type { color: var(--color-limeGreen-200); }
  .hljs-literal { color: var(--color-pink-200); }
  .hljs-number { color: var(--color-grey-025); }
  .hljs-operator { color: var(--color-gold-200); }
  .hljs-punctuation { color: var(--color-paleRed-100); }
  .hljs-property { color: var(--color-pink-100); }
  .hljs-subst { color: var(--color-orange-200); }
  .hljs-symbol { color: var(--color-red-200); }
  .hljs-class { color: var(--color-pink-200); }
  .hljs-variable { color: var(--color-purple-200); }
  .hljs-title { color: var(--color-purple-200); }
  .hljs-comment {
    color: var(--color-grey-700);
    font-size: ${P.fontSizes[1]};
    font-weight: 600;
  }
  .hljs-section { color: var(--color-purple-200); }
  .hljs-tag { color: var(--color-red-200); }
  .hljs-attr { color: var(--color-blue-100); font-weight: 600;}
  .hljs-name { color: var(--color-purple-200); }
  .hljs-attribute { color: var(--color-blue-200); font-weight: 600; }
  .hljs-built_in { color: var(--color-gold-400); font-weight: 400; }
`

interface ICodeBlock {
  lang?: string
  text: string
}
export default function CodeBlock({
  text, lang = 'javascript'
}: ICodeBlock) {
  useEffect(() => {
    hljs.highlightAll()
    hljs.configure({ignoreUnescapedHTML: true})
  }, []);

  return (
    <All>
      <pre>
        <code className={`language-${lang}`}>{text}</code>
      </pre>
    </All>
  )
}