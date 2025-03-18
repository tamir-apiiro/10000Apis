
const express = require('express')
import {handler8322} from "./handler8322";
const app = express()
app.get('/8322', handler8322)
app.listen(3000, () => {})
        