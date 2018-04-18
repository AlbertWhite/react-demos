//manage routekey and real path

export const routeKeys = {
  index: 0
}

export const getRoute = key => {
  switch (key) {
    case routeKeys.index:
      return `/index`
  }
}
