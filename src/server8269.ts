
const express = require('express')
import {handler8269} from "./handler8269";
const app = express()
app.get('/8269', handler8269)
app.listen(3000, () => {})
        