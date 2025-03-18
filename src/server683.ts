
const express = require('express')
import {handler683} from "./handler683";
const app = express()
app.get('/683', handler683)
app.listen(3000, () => {})
        