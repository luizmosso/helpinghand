export const delay = async (duration) => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}