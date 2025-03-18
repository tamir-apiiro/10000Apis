
const express = require('express')
import {handler8724} from "./handler8724";
const app = express()
app.get('/8724', handler8724)
app.listen(3000, () => {})
        