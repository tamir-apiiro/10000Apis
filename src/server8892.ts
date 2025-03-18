
const express = require('express')
import {handler8892} from "./handler8892";
const app = express()
app.get('/8892', handler8892)
app.listen(3000, () => {})
        