
const express = require('express')
import {handler2255} from "./handler2255";
const app = express()
app.get('/2255', handler2255)
app.listen(3000, () => {})
        