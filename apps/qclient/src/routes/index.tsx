import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FancyCSSText from '../components/FancyCSSText';
import FancyStyledVEText from '../components/FancyStyledVEText';
import FancyVEText from '../components/FancyVEText';

export default component$(() => {
  return (
    <div>
      <h1>
        Nx Styled VE <span class="lightning">⚡️</span>
      </h1>
      <FancyCSSText>Fancy CSS Text</FancyCSSText>
      <FancyVEText>Fancy VE Text</FancyVEText>
      <FancyStyledVEText>Fancy Styled VE Text</FancyStyledVEText>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
