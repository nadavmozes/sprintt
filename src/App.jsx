import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Browse } from './pages/Browse'
import { LikedSongs } from './pages/LikedSongs'
import { ActionBar } from './pages/ActionBar'



export function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/liked-songs" component={LikedSongs} />
            <Route path="/browse" component={Browse} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <ActionBar />
      </Router>
    </div>
  )
}

