
const express = require('express')
import {handler41} from "./handler41";
const app = express()
app.get('/41', handler41)
app.listen(3000, () => {})
        