
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

export const getProfile = (id) => {
  return fetch(`/api/profile/${id}`, {
    method: 'GET',
    headers, // equivalent to headers: headers
  }).then(request => request.json());
}

export const setBio = (id, newBio) => {
  return fetch(`/api/profile/${id}`, {
    method: 'PUT',
    headers, // equivalent to headers: headers
    body: JSON.stringify({ bio: newBio }),
  }).then(request => request.json());
}
