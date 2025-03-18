
const express = require('express')
import {handler8281} from "./handler8281";
const app = express()
app.get('/8281', handler8281)
app.listen(3000, () => {})
        