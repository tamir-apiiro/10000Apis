
const express = require('express')
import {handler2174} from "./handler2174";
const app = express()
app.get('/2174', handler2174)
app.listen(3000, () => {})
        