
const express = require('express')
import {handler8743} from "./handler8743";
const app = express()
app.get('/8743', handler8743)
app.listen(3000, () => {})
        