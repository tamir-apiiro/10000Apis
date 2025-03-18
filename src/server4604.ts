
const express = require('express')
import {handler4604} from "./handler4604";
const app = express()
app.get('/4604', handler4604)
app.listen(3000, () => {})
        