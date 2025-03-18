
const express = require('express')
import {handler8093} from "./handler8093";
const app = express()
app.get('/8093', handler8093)
app.listen(3000, () => {})
        