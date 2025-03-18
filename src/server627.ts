
const express = require('express')
import {handler627} from "./handler627";
const app = express()
app.get('/627', handler627)
app.listen(3000, () => {})
        