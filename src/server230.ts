
const express = require('express')
import {handler230} from "./handler230";
const app = express()
app.get('/230', handler230)
app.listen(3000, () => {})
        