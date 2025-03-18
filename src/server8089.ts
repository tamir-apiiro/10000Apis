
const express = require('express')
import {handler8089} from "./handler8089";
const app = express()
app.get('/8089', handler8089)
app.listen(3000, () => {})
        