
const express = require('express')
import {handler8326} from "./handler8326";
const app = express()
app.get('/8326', handler8326)
app.listen(3000, () => {})
        