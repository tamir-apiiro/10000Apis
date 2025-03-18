
const express = require('express')
import {handler8449} from "./handler8449";
const app = express()
app.get('/8449', handler8449)
app.listen(3000, () => {})
        