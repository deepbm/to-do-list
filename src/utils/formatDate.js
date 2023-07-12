export function formatDate(date) {
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  return date.toLocaleDateString('en-US', options);
}
