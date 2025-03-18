
const express = require('express')
import {handler8718} from "./handler8718";
const app = express()
app.get('/8718', handler8718)
app.listen(3000, () => {})
        