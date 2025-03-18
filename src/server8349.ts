
const express = require('express')
import {handler8349} from "./handler8349";
const app = express()
app.get('/8349', handler8349)
app.listen(3000, () => {})
        