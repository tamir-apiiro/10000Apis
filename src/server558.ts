
const express = require('express')
import {handler558} from "./handler558";
const app = express()
app.get('/558', handler558)
app.listen(3000, () => {})
        