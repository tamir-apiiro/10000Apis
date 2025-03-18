
const express = require('express')
import {handler8975} from "./handler8975";
const app = express()
app.get('/8975', handler8975)
app.listen(3000, () => {})
        