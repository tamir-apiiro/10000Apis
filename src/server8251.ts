
const express = require('express')
import {handler8251} from "./handler8251";
const app = express()
app.get('/8251', handler8251)
app.listen(3000, () => {})
        