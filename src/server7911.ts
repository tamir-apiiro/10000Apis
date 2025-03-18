
const express = require('express')
import {handler7911} from "./handler7911";
const app = express()
app.get('/7911', handler7911)
app.listen(3000, () => {})
        