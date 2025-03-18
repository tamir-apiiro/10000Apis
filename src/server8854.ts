
const express = require('express')
import {handler8854} from "./handler8854";
const app = express()
app.get('/8854', handler8854)
app.listen(3000, () => {})
        