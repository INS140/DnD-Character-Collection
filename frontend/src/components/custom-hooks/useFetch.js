export default function useFetch(baseUrl) {
  return {
    get: async (endpoint, token) => {
      try {
        const res = await fetch(baseUrl+endpoint, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        return await res.json()
      } catch (err) {
        return err;
      }
    },
    post: async (endpoint, body, token) => {
      try {
        const res = await fetch(baseUrl + endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(body),
        });
        return await res.json();
      } catch (err) {
        return err;
      }
    },
    put: async (endpoint, body, token) => {
      try {
        const res = await fetch(baseUrl + endpoint, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(body),
        });
        return await res.json();
      } catch (err) {
        return err;
      }
    },
    remove: async (endpoint, token) => {
      try {
        const res = await fetch(baseUrl+endpoint, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })
        return await res.json()
      } catch (err) {
        return err;
      }
    },
  };
}
