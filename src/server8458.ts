
const express = require('express')
import {handler8458} from "./handler8458";
const app = express()
app.get('/8458', handler8458)
app.listen(3000, () => {})
        