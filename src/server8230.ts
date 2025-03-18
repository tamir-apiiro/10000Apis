
const express = require('express')
import {handler8230} from "./handler8230";
const app = express()
app.get('/8230', handler8230)
app.listen(3000, () => {})
        