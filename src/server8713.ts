
const express = require('express')
import {handler8713} from "./handler8713";
const app = express()
app.get('/8713', handler8713)
app.listen(3000, () => {})
        