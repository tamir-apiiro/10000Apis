
const express = require('express')
import {handler377} from "./handler377";
const app = express()
app.get('/377', handler377)
app.listen(3000, () => {})
        