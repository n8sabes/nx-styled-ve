import { component$ } from '@builder.io/qwik'
import {FancyHeader, fancy} from './styles.css'

export default component$(() => {
  const isFancy = true;

  // do header stuff
  return (
    <FancyHeader class={isFancy && fancy}>
      Hello World
      {/* <br /> */}
      {/* The classname it uses is {FancyHeader.className}. */}
    </FancyHeader>
  )
})