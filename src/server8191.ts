
const express = require('express')
import {handler8191} from "./handler8191";
const app = express()
app.get('/8191', handler8191)
app.listen(3000, () => {})
        