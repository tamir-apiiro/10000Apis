
const express = require('express')
import {handler8016} from "./handler8016";
const app = express()
app.get('/8016', handler8016)
app.listen(3000, () => {})
        