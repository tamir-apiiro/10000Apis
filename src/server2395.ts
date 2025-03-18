
const express = require('express')
import {handler2395} from "./handler2395";
const app = express()
app.get('/2395', handler2395)
app.listen(3000, () => {})
        