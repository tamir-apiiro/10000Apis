
const express = require('express')
import {handler7400} from "./handler7400";
const app = express()
app.get('/7400', handler7400)
app.listen(3000, () => {})
        