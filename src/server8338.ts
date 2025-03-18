
const express = require('express')
import {handler8338} from "./handler8338";
const app = express()
app.get('/8338', handler8338)
app.listen(3000, () => {})
        