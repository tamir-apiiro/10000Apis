
const express = require('express')
import {handler4493} from "./handler4493";
const app = express()
app.get('/4493', handler4493)
app.listen(3000, () => {})
        