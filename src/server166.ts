
const express = require('express')
import {handler166} from "./handler166";
const app = express()
app.get('/166', handler166)
app.listen(3000, () => {})
        