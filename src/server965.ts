
const express = require('express')
import {handler965} from "./handler965";
const app = express()
app.get('/965', handler965)
app.listen(3000, () => {})
        