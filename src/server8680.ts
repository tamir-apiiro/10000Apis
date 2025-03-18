
const express = require('express')
import {handler8680} from "./handler8680";
const app = express()
app.get('/8680', handler8680)
app.listen(3000, () => {})
        