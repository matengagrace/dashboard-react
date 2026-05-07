
import Sidebar from './components/Sidebar'
import Container from './components/Container'

function App() {

  return (
    <div className='w-full flex justify-between bg-white pr-3'>
      <Sidebar/>
      <Container/>
    </div>
  )
}

export default App