
const express = require('express')
import {handler387} from "./handler387";
const app = express()
app.get('/387', handler387)
app.listen(3000, () => {})
        