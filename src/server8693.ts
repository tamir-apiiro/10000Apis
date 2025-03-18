
const express = require('express')
import {handler8693} from "./handler8693";
const app = express()
app.get('/8693', handler8693)
app.listen(3000, () => {})
        