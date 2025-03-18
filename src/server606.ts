
const express = require('express')
import {handler606} from "./handler606";
const app = express()
app.get('/606', handler606)
app.listen(3000, () => {})
        