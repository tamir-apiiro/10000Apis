
const express = require('express')
import {handler8659} from "./handler8659";
const app = express()
app.get('/8659', handler8659)
app.listen(3000, () => {})
        