export const baseUrl = 'http://localhost:3000';

export const path = {
  garage: '/garage',
  winners: '/winners',
}

export const getData = async (data: string) => {
  const response = await fetch(`${baseUrl}${data}`);
  const result = await response.json();
  return result;
}
