
const express = require('express')
import {handler8657} from "./handler8657";
const app = express()
app.get('/8657', handler8657)
app.listen(3000, () => {})
        