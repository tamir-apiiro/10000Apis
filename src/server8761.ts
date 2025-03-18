
const express = require('express')
import {handler8761} from "./handler8761";
const app = express()
app.get('/8761', handler8761)
app.listen(3000, () => {})
        