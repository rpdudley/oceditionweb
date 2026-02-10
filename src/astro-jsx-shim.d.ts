// Fallback JSX typings for build environments that fail to resolve Astro's JSX types.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: unknown;
  }
}
