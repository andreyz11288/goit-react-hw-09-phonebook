// import React from 'react'

export default function Api(onFetch, thisPage) {
  const KEY = '19060894-87e054058a337546d07970d77';
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${onFetch}&page=${thisPage}&per_page=12&key=${KEY}`,
  ).then(r => r.json());
}
