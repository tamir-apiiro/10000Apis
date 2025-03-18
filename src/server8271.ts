
const express = require('express')
import {handler8271} from "./handler8271";
const app = express()
app.get('/8271', handler8271)
app.listen(3000, () => {})
        