
const express = require('express')
import {handler8177} from "./handler8177";
const app = express()
app.get('/8177', handler8177)
app.listen(3000, () => {})
        