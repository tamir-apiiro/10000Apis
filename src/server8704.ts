
const express = require('express')
import {handler8704} from "./handler8704";
const app = express()
app.get('/8704', handler8704)
app.listen(3000, () => {})
        