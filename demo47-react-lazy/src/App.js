import React, { Suspense } from 'react'
import './App.css'

export default () => {
  const [showOtherComponent, setShowOtherComponent] = React.useState(false)
  const OtherComponent = React.lazy(() => import('./Other'))
  return (
    <>
      <div className="App">
        <h3>Render Other Component Without Lazyloading</h3>
        <div>
          <button
            onClick={() => {
              setShowOtherComponent(true)
            }}
          >
            Lazy load other component
          </button>
          {showOtherComponent && (
            <Suspense fallback={<div>Loading...</div>}>
              <OtherComponent />
            </Suspense>
          )}
        </div>
      </div>
    </>
  )
}
