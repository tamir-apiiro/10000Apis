
const express = require('express')
import {handler942} from "./handler942";
const app = express()
app.get('/942', handler942)
app.listen(3000, () => {})
        