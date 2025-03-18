
const express = require('express')
import {handler17} from "./handler17";
const app = express()
app.get('/17', handler17)
app.listen(3000, () => {})
        