
const express = require('express')
import {handler7745} from "./handler7745";
const app = express()
app.get('/7745', handler7745)
app.listen(3000, () => {})
        