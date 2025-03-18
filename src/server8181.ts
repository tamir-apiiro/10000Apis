
const express = require('express')
import {handler8181} from "./handler8181";
const app = express()
app.get('/8181', handler8181)
app.listen(3000, () => {})
        