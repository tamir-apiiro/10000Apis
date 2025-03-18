
const express = require('express')
import {handler8422} from "./handler8422";
const app = express()
app.get('/8422', handler8422)
app.listen(3000, () => {})
        