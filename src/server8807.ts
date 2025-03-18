
const express = require('express')
import {handler8807} from "./handler8807";
const app = express()
app.get('/8807', handler8807)
app.listen(3000, () => {})
        