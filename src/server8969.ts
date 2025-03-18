
const express = require('express')
import {handler8969} from "./handler8969";
const app = express()
app.get('/8969', handler8969)
app.listen(3000, () => {})
        