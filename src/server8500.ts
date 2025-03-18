
const express = require('express')
import {handler8500} from "./handler8500";
const app = express()
app.get('/8500', handler8500)
app.listen(3000, () => {})
        