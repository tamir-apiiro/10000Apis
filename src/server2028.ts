
const express = require('express')
import {handler2028} from "./handler2028";
const app = express()
app.get('/2028', handler2028)
app.listen(3000, () => {})
        