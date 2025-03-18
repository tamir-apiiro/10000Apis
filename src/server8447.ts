
const express = require('express')
import {handler8447} from "./handler8447";
const app = express()
app.get('/8447', handler8447)
app.listen(3000, () => {})
        