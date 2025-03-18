
const express = require('express')
import {handler8678} from "./handler8678";
const app = express()
app.get('/8678', handler8678)
app.listen(3000, () => {})
        