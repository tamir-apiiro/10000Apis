
const express = require('express')
import {handler8671} from "./handler8671";
const app = express()
app.get('/8671', handler8671)
app.listen(3000, () => {})
        