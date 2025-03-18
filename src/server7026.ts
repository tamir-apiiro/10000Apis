
const express = require('express')
import {handler7026} from "./handler7026";
const app = express()
app.get('/7026', handler7026)
app.listen(3000, () => {})
        