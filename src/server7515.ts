
const express = require('express')
import {handler7515} from "./handler7515";
const app = express()
app.get('/7515', handler7515)
app.listen(3000, () => {})
        