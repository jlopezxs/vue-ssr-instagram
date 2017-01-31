import { app, router, store } from './app'

export default context => {
  router.push(context.url)

  const s = Date.now()
  return Promise.all(router.getMatchedComponents().map(component => {
    if (component.prefetch) {
      return component.prefetch(store)
    }
  })).then(() => {
    console.log(`data pre-fetch: ${Date.now() - s}ms`)

    context.initialState = store.state
    return app
  })
}
