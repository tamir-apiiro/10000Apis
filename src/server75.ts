
const express = require('express')
import {handler75} from "./handler75";
const app = express()
app.get('/75', handler75)
app.listen(3000, () => {})
        