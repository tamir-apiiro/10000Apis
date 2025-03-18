
const express = require('express')
import {handler998} from "./handler998";
const app = express()
app.get('/998', handler998)
app.listen(3000, () => {})
        