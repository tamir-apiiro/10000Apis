
const express = require('express')
import {handler8170} from "./handler8170";
const app = express()
app.get('/8170', handler8170)
app.listen(3000, () => {})
        