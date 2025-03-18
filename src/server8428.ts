
const express = require('express')
import {handler8428} from "./handler8428";
const app = express()
app.get('/8428', handler8428)
app.listen(3000, () => {})
        