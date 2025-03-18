
const express = require('express')
import {handler8391} from "./handler8391";
const app = express()
app.get('/8391', handler8391)
app.listen(3000, () => {})
        