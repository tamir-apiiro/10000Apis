
const express = require('express')
import {handler7815} from "./handler7815";
const app = express()
app.get('/7815', handler7815)
app.listen(3000, () => {})
        