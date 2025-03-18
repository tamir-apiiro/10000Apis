
const express = require('express')
import {handler8739} from "./handler8739";
const app = express()
app.get('/8739', handler8739)
app.listen(3000, () => {})
        