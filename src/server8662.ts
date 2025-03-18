
const express = require('express')
import {handler8662} from "./handler8662";
const app = express()
app.get('/8662', handler8662)
app.listen(3000, () => {})
        