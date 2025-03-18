
const express = require('express')
import {handler8595} from "./handler8595";
const app = express()
app.get('/8595', handler8595)
app.listen(3000, () => {})
        