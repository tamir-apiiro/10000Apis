
const express = require('express')
import {handler7585} from "./handler7585";
const app = express()
app.get('/7585', handler7585)
app.listen(3000, () => {})
        