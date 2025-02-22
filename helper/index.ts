export const getData = async (endpoints: string) => {
  const response = await fetch(endpoints, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
    mode: "cors",
  });
  const data = await response.json();
  return data;
};
