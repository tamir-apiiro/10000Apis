
const express = require('express')
import {handler8179} from "./handler8179";
const app = express()
app.get('/8179', handler8179)
app.listen(3000, () => {})
        