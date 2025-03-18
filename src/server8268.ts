
const express = require('express')
import {handler8268} from "./handler8268";
const app = express()
app.get('/8268', handler8268)
app.listen(3000, () => {})
        