
const express = require('express')
import {handler8919} from "./handler8919";
const app = express()
app.get('/8919', handler8919)
app.listen(3000, () => {})
        