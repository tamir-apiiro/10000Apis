
const express = require('express')
import {handler7790} from "./handler7790";
const app = express()
app.get('/7790', handler7790)
app.listen(3000, () => {})
        