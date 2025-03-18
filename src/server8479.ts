
const express = require('express')
import {handler8479} from "./handler8479";
const app = express()
app.get('/8479', handler8479)
app.listen(3000, () => {})
        