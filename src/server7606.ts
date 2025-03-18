
const express = require('express')
import {handler7606} from "./handler7606";
const app = express()
app.get('/7606', handler7606)
app.listen(3000, () => {})
        