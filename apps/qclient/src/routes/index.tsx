import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import FancyHeader from '../components/FancyHeader';

export default component$(() => {
  return (
    <div>
      <h1>
        Welcome qclient <span class="lightning">⚡️</span>
      </h1>
      <FancyHeader />
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
