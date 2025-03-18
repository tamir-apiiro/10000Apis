
const express = require('express')
import {handler8245} from "./handler8245";
const app = express()
app.get('/8245', handler8245)
app.listen(3000, () => {})
        