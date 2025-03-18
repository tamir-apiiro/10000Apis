
const express = require('express')
import {handler7998} from "./handler7998";
const app = express()
app.get('/7998', handler7998)
app.listen(3000, () => {})
        