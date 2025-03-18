
const express = require('express')
import {handler69} from "./handler69";
const app = express()
app.get('/69', handler69)
app.listen(3000, () => {})
        