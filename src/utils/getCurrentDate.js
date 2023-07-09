export function getCurrentDate() {
  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const d = new Date();

  return d.toLocaleDateString('en-US', options);
}
