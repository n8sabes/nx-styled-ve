import { component$, Slot } from '@builder.io/qwik'
import { FancyStyledVEText } from './styles.css'

export default component$(() => {
  return (<>
    <FancyStyledVEText>
      <Slot />
    </FancyStyledVEText>
  </>);
});
