
const express = require('express')
import {handler8411} from "./handler8411";
const app = express()
app.get('/8411', handler8411)
app.listen(3000, () => {})
        