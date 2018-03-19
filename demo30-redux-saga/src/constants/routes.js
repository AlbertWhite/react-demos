//manage routekey and real path

export const routeKeys = {
  signin: 0,
  signup: 1
}

export const getRoute = key => {
  switch (key) {
    case routeKeys.signin:
      return `/signin`
    case routeKeys.signup:
      return `/signup`
  }
}
