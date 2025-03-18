
const express = require('express')
import {handler8946} from "./handler8946";
const app = express()
app.get('/8946', handler8946)
app.listen(3000, () => {})
        