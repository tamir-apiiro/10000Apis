
const express = require('express')
import {handler8767} from "./handler8767";
const app = express()
app.get('/8767', handler8767)
app.listen(3000, () => {})
        