
const express = require('express')
import {handler7482} from "./handler7482";
const app = express()
app.get('/7482', handler7482)
app.listen(3000, () => {})
        