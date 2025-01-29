// I tested this code in the online react compile
// https://playcode.io/react_ts_hooks

import React from 'react'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        color: 'white'
      }}
    >
      {/* Header */}
      <div style={{ backgroundColor: 'skyblue', flex: 1 }}>
        <h1 style={{ textAlign: 'center' }}>Header</h1>
      </div>
      {/* Hero and Main Content */}
      <div style={{ display: 'flex', flex: 3 }}>
        <div style={{ backgroundColor: 'thistle', flex: 1 }}>
          <h2 style={{ textAlign: 'center' }}>Hero</h2>
        </div>
        <div style={{ backgroundColor: 'gold', flex: 2 }}>
          <h2 style={{ textAlign: 'center' }}>Main Content</h2>
          <p style={{ textAlign: 'center' }}>
            If things do not look right, make sure your browser is in
            "Experimental Mode".
          </p>
        </div>
      </div>
      {/* Sidebar and Extra Content */}
      <div style={{ display: 'flex', flex: 3 }}>
        <div style={{ backgroundColor: 'darkseagreen', flex: 1 }}>
          <h2 style={{ textAlign: 'center' }}>Sidebar</h2>
        </div>
        <div style={{ backgroundColor: 'gray', flex: 2 }}>
          <h2 style={{ textAlign: 'center' }}>Extra Content</h2>
        </div>
      </div>
      {/* Related Images and Related Posts */}
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ backgroundColor: 'mediumseagreen', flex: 2 }}>
          <h2 style={{ textAlign: 'center' }}>Related Images</h2>
        </div>
        <div style={{ backgroundColor: 'pink', flex: 1 }}>
          <h2 style={{ textAlign: 'center' }}>Related Posts</h2>
        </div>
      </div>
      {/* Footer */}
      <div style={{ backgroundColor: 'orange', flex: 1 }}>
        <h2 style={{ textAlign: 'center' }}>Footer</h2>
      </div>
    </div>
  )
}

export default App
