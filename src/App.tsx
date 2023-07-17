import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'
import { TaskCreate } from './components/pages/task/taskCreate'
import { TopMenuContainer } from './feature/topMenu/topMenuContainer'
import { TaskListContainer } from './feature/task/TaskListContainer'

function App() {

  return (
    <>
      <TopMenuContainer />
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/create">タスク追加</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={TaskListContainer} />
          <Route exact path="/create" component={TaskCreate} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
