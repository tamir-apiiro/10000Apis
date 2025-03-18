
const express = require('express')
import {handler8088} from "./handler8088";
const app = express()
app.get('/8088', handler8088)
app.listen(3000, () => {})
        