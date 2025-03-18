
const express = require('express')
import {handler2340} from "./handler2340";
const app = express()
app.get('/2340', handler2340)
app.listen(3000, () => {})
        