
const express = require('express')
import {handler8530} from "./handler8530";
const app = express()
app.get('/8530', handler8530)
app.listen(3000, () => {})
        