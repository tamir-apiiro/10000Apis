
const express = require('express')
import {handler7081} from "./handler7081";
const app = express()
app.get('/7081', handler7081)
app.listen(3000, () => {})
        