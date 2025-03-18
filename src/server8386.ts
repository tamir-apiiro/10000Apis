
const express = require('express')
import {handler8386} from "./handler8386";
const app = express()
app.get('/8386', handler8386)
app.listen(3000, () => {})
        