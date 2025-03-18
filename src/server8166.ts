
const express = require('express')
import {handler8166} from "./handler8166";
const app = express()
app.get('/8166', handler8166)
app.listen(3000, () => {})
        