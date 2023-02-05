import { style, styled } from 'styled-vanilla-extract/qwik'

// Local classname that makes things fancy
export const fancy = style({})

// Header: a Qwik Lite Component
export const FancyHeader = styled.header({
  padding: '0.5em',
  border: 'thin solid var(--color-hint)',
  borderBottom: 'none',
  selectors: {
    [`${fancy} &, ${fancy}&`]: {
      background: 'red',
    },
  },
});
