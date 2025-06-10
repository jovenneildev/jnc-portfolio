import { imagePaths } from './constant/images'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={imagePaths.jncLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={imagePaths.jncLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React!!!!</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
