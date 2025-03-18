
const express = require('express')
import {handler8599} from "./handler8599";
const app = express()
app.get('/8599', handler8599)
app.listen(3000, () => {})
        