
const express = require('express')
import {handler8628} from "./handler8628";
const app = express()
app.get('/8628', handler8628)
app.listen(3000, () => {})
        