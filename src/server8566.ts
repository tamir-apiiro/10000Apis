
const express = require('express')
import {handler8566} from "./handler8566";
const app = express()
app.get('/8566', handler8566)
app.listen(3000, () => {})
        