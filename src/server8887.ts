
const express = require('express')
import {handler8887} from "./handler8887";
const app = express()
app.get('/8887', handler8887)
app.listen(3000, () => {})
        