
const express = require('express')
import {handler7493} from "./handler7493";
const app = express()
app.get('/7493', handler7493)
app.listen(3000, () => {})
        