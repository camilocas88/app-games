import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from './routes/indexRoutes'
import gamesRoutes from './routes/gamesRoutes'

class Server {

  public app: Application
  
  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  config(): void {
    this.app.set('port', process.env.PORT || 3000)  //definicion del puerto
    this.app.use(morgan('dev'))  // Ver en consola las peticiones GET POST...
    this.app.use(cors())
    this.app.use(express.json()) //El servidor entinede el formato json
    this.app.use(express.urlencoded({extended: false}))
  }

  routes(): void{
    this.app.use(indexRoutes)
    this.app.use('/api/games', gamesRoutes)
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log("Server on port", this.app.get('port'));
      
    })
  }

}

const server = new Server()
server.start()