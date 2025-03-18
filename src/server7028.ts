
const express = require('express')
import {handler7028} from "./handler7028";
const app = express()
app.get('/7028', handler7028)
app.listen(3000, () => {})
        