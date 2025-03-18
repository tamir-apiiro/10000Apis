
const express = require('express')
import {handler8917} from "./handler8917";
const app = express()
app.get('/8917', handler8917)
app.listen(3000, () => {})
        