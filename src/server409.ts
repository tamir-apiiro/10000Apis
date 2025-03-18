
const express = require('express')
import {handler409} from "./handler409";
const app = express()
app.get('/409', handler409)
app.listen(3000, () => {})
        