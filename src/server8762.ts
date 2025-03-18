
const express = require('express')
import {handler8762} from "./handler8762";
const app = express()
app.get('/8762', handler8762)
app.listen(3000, () => {})
        