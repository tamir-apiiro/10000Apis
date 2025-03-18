
const express = require('express')
import {handler7529} from "./handler7529";
const app = express()
app.get('/7529', handler7529)
app.listen(3000, () => {})
        