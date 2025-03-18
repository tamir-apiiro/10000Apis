
const express = require('express')
import {handler8582} from "./handler8582";
const app = express()
app.get('/8582', handler8582)
app.listen(3000, () => {})
        