
const express = require('express')
import {handler8067} from "./handler8067";
const app = express()
app.get('/8067', handler8067)
app.listen(3000, () => {})
        