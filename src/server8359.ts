
const express = require('express')
import {handler8359} from "./handler8359";
const app = express()
app.get('/8359', handler8359)
app.listen(3000, () => {})
        