
const express = require('express')
import {handler8765} from "./handler8765";
const app = express()
app.get('/8765', handler8765)
app.listen(3000, () => {})
        