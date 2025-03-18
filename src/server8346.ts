
const express = require('express')
import {handler8346} from "./handler8346";
const app = express()
app.get('/8346', handler8346)
app.listen(3000, () => {})
        