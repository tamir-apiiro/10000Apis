
const express = require('express')
import {handler8487} from "./handler8487";
const app = express()
app.get('/8487', handler8487)
app.listen(3000, () => {})
        