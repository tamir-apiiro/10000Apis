
const express = require('express')
import {handler8320} from "./handler8320";
const app = express()
app.get('/8320', handler8320)
app.listen(3000, () => {})
        