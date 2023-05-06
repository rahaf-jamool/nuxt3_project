export default defineEventHandler(async (event) => {
  const { serverApiBase, serverApi } = useRuntimeConfig();

  const data = await $fetch(`${serverApi.AuthLoginApi}`, {
    baseURL: serverApiBase,
    method: 'POST',
    body: {
      email: 'Admin@app.com',
      password: 'Admin@123'
    }
  })

  return data
});		