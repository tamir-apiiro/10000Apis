
const express = require('express')
import {handler8735} from "./handler8735";
const app = express()
app.get('/8735', handler8735)
app.listen(3000, () => {})
        