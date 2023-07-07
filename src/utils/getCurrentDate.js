export function getCurrentDate() {
  const d = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  return `${d.getMonth() + 1}월 ${d.getDate()}일 ${week[d.getDay()]}요일`;
}
