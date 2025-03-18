
const express = require('express')
import {handler2377} from "./handler2377";
const app = express()
app.get('/2377', handler2377)
app.listen(3000, () => {})
        