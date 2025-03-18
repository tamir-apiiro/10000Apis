
const express = require('express')
import {handler33} from "./handler33";
const app = express()
app.get('/33', handler33)
app.listen(3000, () => {})
        