
const express = require('express')
import {handler8672} from "./handler8672";
const app = express()
app.get('/8672', handler8672)
app.listen(3000, () => {})
        