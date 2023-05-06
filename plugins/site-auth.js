export default defineNuxtPlugin(async nuxtApp => {
  const { apiBase, api } = useRuntimeConfig();
  const { $awn } = useNuxtApp();

    // Get Main Site Token
    // const mainToken = localStorage.getItem('mainToken')
    // const mainToken = useCookie('mainToken')
    // const refreshMainToken = useCookie('refreshMainToken')
    // // store main token in useSTate
    // useMainToken().value = mainToken
    // useRefreshMainToken().value = refreshMainToken
    // if (!mainToken) {
    //   const data = await $fetch(`${api.AuthLoginApi}`, {
    //       baseURL: apiBase,
    //       method: 'POST',
    //       body: {
    //         email: 'Admin@app.com',
    //         password: 'Admin@123'
    //       }
    //     })
    //     // Store token if there is not any error
    //     if (data.token) {
    //       // localStorage.setItem('mainToken', data.token);
    //       useCookie('mainToken').value = data.token
    //       useCookie('refreshMainToken').value = data.refreshToken
    //       useMainToken().value = data.token
    //       useRefreshMainToken().value = data.refreshToken
    //     }
    //     if (!data.token) {
    //       $awn.alert('Server Error, Please Try Again Later', { durations: { global: 5000 } })
    //     }
    // }


  // if (typeof window !== 'undefined') {
  if (process.client) {
    // Get Main Site Token
    const mainToken = localStorage.getItem('mainToken')    
    // Store Main Site Token
    useMainToken().value = mainToken
    // Get Refresh Token for Main Token
    const refreshMainToken = localStorage.getItem('refreshMainToken');    
    // Store Refresh Token for Main Token In State
    useRefreshMainToken().value = refreshMainToken
    // Get User Token
    const token = localStorage.getItem('token')
    // Get User Info
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    // make global isAuthenticated state true
    useAuth().value.isAuthenticated = token ? true : false
    // store Token in the store
    useToken().value = token
    // store userinfo in the store
    useUserInfo().value = userInfo
    // get account type from localstorage
    const accountType = localStorage.getItem('accountType')
    // Store account type in store
    useAccountType().value = accountType

    // Get Main Site Token
    if (!mainToken) {
        const data = await $fetch(`${api.AuthLoginApi}`, {
          baseURL: apiBase,
          method: 'POST',
          body: {
            email: 'Admin@app.com',
            password: 'Admin@123'
          }
        })
        // Store token if there is not any error
        if (data.token) {
          localStorage.setItem('mainToken', data.token);
          useMainToken().value = data.token
        }
        if (!data.token) {
          $awn.alert('Server Error, Please Try Again Later', { durations: { global: 5000 } })
        }

      // const { data } = await useFetch('/api/login');
      // // Store token if there is not any error
      // if (data.value.token) {
      //   localStorage.setItem('mainToken', data.value.token);
      //   localStorage.setItem('refreshMainToken', data.value.refreshToken);
      //   useMainToken().value = data.value.token
      //   useRefreshMainToken().value = data.value.refreshToken
      // }
      // if (!data.value.token) {
      //   $awn.alert('Server Error, Please Try Again Later', { durations: { global: 5000 } })
      // }
    }



    const menuQuery = `${api.MenusGetByCategoryApi}?CategoryId=2`
    const { error, execute } = await useDefaultCurrency().getCurrency();
    const { data: menu, error: errorMenu, execute: executeMenu } = await useGetSiteApi().GetAll(menuQuery)
    if ((error.value && error.value.statusCode == 401) || (errorMenu.value && errorMenu.value.statusCode == 401)) {
      await useReauthorization().reAuthorize()
      execute();
      executeMenu();
    }
    if (menu.value) {
      useMenus().value = menu.value
    }
  }
})