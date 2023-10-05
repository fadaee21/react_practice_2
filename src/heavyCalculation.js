export default function heavyCalculation() {
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return "it was so Heavy calculation";
}
