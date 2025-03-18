
const express = require('express')
import {handler8797} from "./handler8797";
const app = express()
app.get('/8797', handler8797)
app.listen(3000, () => {})
        