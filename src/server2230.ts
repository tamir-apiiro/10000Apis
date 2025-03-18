
const express = require('express')
import {handler2230} from "./handler2230";
const app = express()
app.get('/2230', handler2230)
app.listen(3000, () => {})
        