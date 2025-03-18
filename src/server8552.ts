
const express = require('express')
import {handler8552} from "./handler8552";
const app = express()
app.get('/8552', handler8552)
app.listen(3000, () => {})
        