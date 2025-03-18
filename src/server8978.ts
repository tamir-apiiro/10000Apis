
const express = require('express')
import {handler8978} from "./handler8978";
const app = express()
app.get('/8978', handler8978)
app.listen(3000, () => {})
        