const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithRetry = async (
  url,
  options = {},
  retries = 3,
  backoff = 300
) => {
  const response = await fetch(url, options);
  if (response.ok) return response.json();

  if (retries > 0) {
    await sleep(backoff);
    return fetchWithRetry(url, options, retries - 1, backoff * 2);
  } else {
    throw new Error(response.status);
  }
};

export default fetchWithRetry;
