
const express = require('express')
import {handler2365} from "./handler2365";
const app = express()
app.get('/2365', handler2365)
app.listen(3000, () => {})
        