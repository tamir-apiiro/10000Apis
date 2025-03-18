
const express = require('express')
import {handler8263} from "./handler8263";
const app = express()
app.get('/8263', handler8263)
app.listen(3000, () => {})
        