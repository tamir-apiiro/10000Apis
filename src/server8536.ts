
const express = require('express')
import {handler8536} from "./handler8536";
const app = express()
app.get('/8536', handler8536)
app.listen(3000, () => {})
        