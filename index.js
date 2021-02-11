addEventListener('fetch', event => event.respondWith(handleRequest(event.request)))


async function handleRequest(request) {
  let url = new URL(request.url)
  let cookie = parseCookie(request.headers.get('cookie'))

  if (cookie && cookie['__cfwlb']) {
    url.hostname = atob(cookie['__cfwlb'])
    response = await fetch(url.toString(), request)
  } else {
    url.hostname = origins.primary
    response = await fetch(url.toString(), request)
    response = new Response(response.body, response)
    response.headers.set('Set-Cookie', `__cfwlb=${btoa(origins.primary)}; Domain=${request.headers.get('Host')}; Secure; HttpOnly`)
  }

  console.log(`Origin: ${url.hostname}`)
  return response
}


const origins = {
  primary: 'www.httpbin.org',
  failover: 'docs.microsoft.com'
}


const parseCookie = (str) => {
  try {
    if (!str) throw 'no cookie'
    return str
      .split(';')
      .map(v => v.split('='))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
        return acc;
      }, {})
  } catch (e) {
    console.log(e)
    return null
  }
}
