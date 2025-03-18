
const express = require('express')
import {handler8452} from "./handler8452";
const app = express()
app.get('/8452', handler8452)
app.listen(3000, () => {})
        