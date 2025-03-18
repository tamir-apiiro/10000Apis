
const express = require('express')
import {handler472} from "./handler472";
const app = express()
app.get('/472', handler472)
app.listen(3000, () => {})
        