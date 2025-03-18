
const express = require('express')
import {handler2642} from "./handler2642";
const app = express()
app.get('/2642', handler2642)
app.listen(3000, () => {})
        