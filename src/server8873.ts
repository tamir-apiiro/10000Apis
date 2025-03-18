
const express = require('express')
import {handler8873} from "./handler8873";
const app = express()
app.get('/8873', handler8873)
app.listen(3000, () => {})
        