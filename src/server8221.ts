
const express = require('express')
import {handler8221} from "./handler8221";
const app = express()
app.get('/8221', handler8221)
app.listen(3000, () => {})
        