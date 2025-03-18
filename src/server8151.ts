
const express = require('express')
import {handler8151} from "./handler8151";
const app = express()
app.get('/8151', handler8151)
app.listen(3000, () => {})
        