
const express = require('express')
import {handler8313} from "./handler8313";
const app = express()
app.get('/8313', handler8313)
app.listen(3000, () => {})
        