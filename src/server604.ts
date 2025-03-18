
const express = require('express')
import {handler604} from "./handler604";
const app = express()
app.get('/604', handler604)
app.listen(3000, () => {})
        