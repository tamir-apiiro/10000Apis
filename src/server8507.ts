
const express = require('express')
import {handler8507} from "./handler8507";
const app = express()
app.get('/8507', handler8507)
app.listen(3000, () => {})
        