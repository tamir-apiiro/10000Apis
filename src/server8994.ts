
const express = require('express')
import {handler8994} from "./handler8994";
const app = express()
app.get('/8994', handler8994)
app.listen(3000, () => {})
        