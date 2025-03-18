
const express = require('express')
import {handler1261} from "./handler1261";
const app = express()
app.get('/1261', handler1261)
app.listen(3000, () => {})
        