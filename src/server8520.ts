
const express = require('express')
import {handler8520} from "./handler8520";
const app = express()
app.get('/8520', handler8520)
app.listen(3000, () => {})
        