
const express = require('express')
import {handler8775} from "./handler8775";
const app = express()
app.get('/8775', handler8775)
app.listen(3000, () => {})
        