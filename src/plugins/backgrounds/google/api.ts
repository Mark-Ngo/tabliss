import { API } from '../../types';

export async function getImage(): Promise<string> {
  // Build search url
  let url = 'https://phucnd-api.herokuapp.com/girls/random';

  // Fetch from API
  const res = await (await fetch(url)).json();

  let ggUrl = 'https://drive.google.com/uc?export=view&id=' + res.id;

  return ggUrl;
}
