
const express = require('express')
import {handler8617} from "./handler8617";
const app = express()
app.get('/8617', handler8617)
app.listen(3000, () => {})
        