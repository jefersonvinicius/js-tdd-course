const MINUTE_IN_MILLISECONDS = 1000 * 60;
const SECOND_IN_MILLISECONDS = 1000;

export default function convertToHumanTime(ms) {
  const minutes = parseInt(ms / MINUTE_IN_MILLISECONDS, 10);
  const seconds = parseInt((ms / SECOND_IN_MILLISECONDS) % 60, 10).toString();
  return `${minutes}:${seconds.padStart(2, '0')}`;
}
