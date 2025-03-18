
const express = require('express')
import {handler8339} from "./handler8339";
const app = express()
app.get('/8339', handler8339)
app.listen(3000, () => {})
        