
const express = require('express')
import {handler8957} from "./handler8957";
const app = express()
app.get('/8957', handler8957)
app.listen(3000, () => {})
        