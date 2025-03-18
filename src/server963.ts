
const express = require('express')
import {handler963} from "./handler963";
const app = express()
app.get('/963', handler963)
app.listen(3000, () => {})
        