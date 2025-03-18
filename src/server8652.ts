
const express = require('express')
import {handler8652} from "./handler8652";
const app = express()
app.get('/8652', handler8652)
app.listen(3000, () => {})
        