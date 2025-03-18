
const express = require('express')
import {handler8503} from "./handler8503";
const app = express()
app.get('/8503', handler8503)
app.listen(3000, () => {})
        