
const express = require('express')
import {handler8461} from "./handler8461";
const app = express()
app.get('/8461', handler8461)
app.listen(3000, () => {})
        