import { component$, Slot } from '@builder.io/qwik'
import { FancyVEText } from './styles.css'

export default component$(() => {
  return (<>
    <div class={FancyVEText}>
      <Slot />
    </div>
  </>);
});
