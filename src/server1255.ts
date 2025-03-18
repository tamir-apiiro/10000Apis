
const express = require('express')
import {handler1255} from "./handler1255";
const app = express()
app.get('/1255', handler1255)
app.listen(3000, () => {})
        