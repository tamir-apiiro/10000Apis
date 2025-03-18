
const express = require('express')
import {handler8692} from "./handler8692";
const app = express()
app.get('/8692', handler8692)
app.listen(3000, () => {})
        