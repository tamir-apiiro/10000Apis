
const express = require('express')
import {handler7409} from "./handler7409";
const app = express()
app.get('/7409', handler7409)
app.listen(3000, () => {})
        