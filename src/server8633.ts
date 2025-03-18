
const express = require('express')
import {handler8633} from "./handler8633";
const app = express()
app.get('/8633', handler8633)
app.listen(3000, () => {})
        