
const express = require('express')
import {handler8863} from "./handler8863";
const app = express()
app.get('/8863', handler8863)
app.listen(3000, () => {})
        