
const express = require('express')
import {handler8095} from "./handler8095";
const app = express()
app.get('/8095', handler8095)
app.listen(3000, () => {})
        