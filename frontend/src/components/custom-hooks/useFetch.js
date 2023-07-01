export default function useFetch(baseUrl) { // this hook now requires that a baseurl be input as an arguemnet when called
  return {
    get: async (endpoint, headers) => {
      try {
        const res = await fetch(baseUrl+endpoint, {
          headers: {
            ...headers
          }
        })
        return await res.json()
      } catch (err) {
        return err
      }
    },
    post: async (endpoint, body, headers) => {
      try {
        const res = await fetch(baseUrl+endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...headers
          },
          body: JSON.stringify(body)
        })
        return await res.json()
      } catch (err) {
        return err
      }
    },
    put: async (endpoint, body, headers) => {
      try {
        const res = await fetch(baseUrl+endpoint, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
            ...headers
          },
          body: JSON.stringify(body)
        })
        return await res.json()
      } catch (err) {
        return err
      }
    },
    remove: async (endpoint, headers) => {
      try {
        const res = await fetch(baseUrl+endpoint, {
          method: 'DELETE',
          headers: {
            ...headers
          }
        })
        return await res.json()
      } catch (err) {
        return err
      }
    }
  }
}