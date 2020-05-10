import React from 'react'

const Child = () => {
  console.log('Child without memoized prop renders')
  return (
    <p>
      A Child Component: Child component renders when Parent component renders
    </p>
  )
}

const ChildByUseMemo = ({ prop }) => {
  console.log('Child rendered by React.useMemo renders')
  return (
    <p>
      Child Component wrapper by React.useMemo. It will not be rendered if
      dependency doesn't change.
    </p>
  )
}

class ChildWithMemoizedProp extends React.PureComponent {
  render() {
    console.log('Child with memoized prop renders')
    return (
      <p>
        Another Child Component: It will not render even if Parent component
        renders, because its props are{' '}
        <a href="https://en.wikipedia.org/wiki/Memoization">memoized</a>
      </p>
    )
  }
}

const Parent = ({ useMemoDependency, setCount }) => {
  console.log('Parent renders')

  const calculate = (useMemoDependency) => {
    console.log('calculate')
    return useMemoDependency.slice(0)
  }

  // UseMemo: helps to avoid expensive calculations on every render.
  const memoizedValue = React.useMemo(
    () => calculate(useMemoDependency), // calculate memoized value from dependency
    [useMemoDependency]
  )

  const memoizedOnClick = React.useCallback(() => {}, [])

  const ChildMemoized = React.useMemo(
    () => <ChildByUseMemo prop={useMemoDependency} />,
    [useMemoDependency]
  )

  return (
    <>
      <Child />
      {ChildMemoized}
      <ChildWithMemoizedProp
        memoizedValue={memoizedValue}
        setCount={setCount}
        memoizedOnClick={memoizedOnClick}
      />
    </>
  )
}

const App = () => {
  const [count, setCount] = React.useState(1)
  console.log('App render')

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Update component state
      </button>
      <Parent
        count={count}
        useMemoDependency="value"
        setCount={setCount}
        id={1}
      />
    </div>
  )
}

export default App
