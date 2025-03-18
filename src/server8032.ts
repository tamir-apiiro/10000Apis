
const express = require('express')
import {handler8032} from "./handler8032";
const app = express()
app.get('/8032', handler8032)
app.listen(3000, () => {})
        