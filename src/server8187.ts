
const express = require('express')
import {handler8187} from "./handler8187";
const app = express()
app.get('/8187', handler8187)
app.listen(3000, () => {})
        