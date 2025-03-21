export default eventHandler((event) => {
  const runtimeConfig = useRuntimeConfig(event)

  return [{
    helloText: runtimeConfig.public.helloText,
    helloTextOne: runtimeConfig.public.helloTextOne,
    helloTextTwo: runtimeConfig.public.helloTextTwo,
  }, {
    helloText: process.env.NUXT_PUBLIC_HELLO_TEXT,
    helloTextOne: process.env.NUXT_PUBLIC_HELLO_TEXT_ONE,
  }]
})
