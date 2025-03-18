
const express = require('express')
import {handler8929} from "./handler8929";
const app = express()
app.get('/8929', handler8929)
app.listen(3000, () => {})
        