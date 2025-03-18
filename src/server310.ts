
const express = require('express')
import {handler310} from "./handler310";
const app = express()
app.get('/310', handler310)
app.listen(3000, () => {})
        