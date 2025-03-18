
const express = require('express')
import {handler7230} from "./handler7230";
const app = express()
app.get('/7230', handler7230)
app.listen(3000, () => {})
        