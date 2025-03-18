
const express = require('express')
import {handler253} from "./handler253";
const app = express()
app.get('/253', handler253)
app.listen(3000, () => {})
        