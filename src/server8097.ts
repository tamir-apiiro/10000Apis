
const express = require('express')
import {handler8097} from "./handler8097";
const app = express()
app.get('/8097', handler8097)
app.listen(3000, () => {})
        