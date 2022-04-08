const request = async (url) => {
  const response = await fetch(url);
  const data = response.ok ? await response.json() : [];
  return data;
};

const getCountries = async () => await request("https://api.covidtracking.com/v1/states/info.json");
const getSpecificCountrie = async (state) => await request(`https://api.covidtracking.com/v1/states/${state}/info.json`);
const getCurrentValueState = async (state) => await request(`https://api.covidtracking.com/v1/states/${state}/current.json`);

export { getCountries, getSpecificCountrie, getCurrentValueState };
