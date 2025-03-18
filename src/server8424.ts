
const express = require('express')
import {handler8424} from "./handler8424";
const app = express()
app.get('/8424', handler8424)
app.listen(3000, () => {})
        