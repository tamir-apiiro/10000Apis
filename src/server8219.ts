
const express = require('express')
import {handler8219} from "./handler8219";
const app = express()
app.get('/8219', handler8219)
app.listen(3000, () => {})
        