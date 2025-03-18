
const express = require('express')
import {handler8763} from "./handler8763";
const app = express()
app.get('/8763', handler8763)
app.listen(3000, () => {})
        