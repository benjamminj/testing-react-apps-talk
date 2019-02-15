const GITHUB_API_URL = 'https://api.github.com';

export const normalizeJson = json => {
  const { items } = json;
  return items.map(
    ({
      id,
      name,
      description,
      html_url: url,
      stargazers_count: stars,
      license,
    }) => ({
      id,
      name,
      description,
      url,
      stars,
      license: license ? license.name : null,
    })
  );
};

export const fetchRepos = async topic => {
  const res = await fetch(`${GITHUB_API_URL}/search/repositories?q=${topic}`);
  const json = await res.json();
  return normalizeJson(json);
};
