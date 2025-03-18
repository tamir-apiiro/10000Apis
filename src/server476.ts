
const express = require('express')
import {handler476} from "./handler476";
const app = express()
app.get('/476', handler476)
app.listen(3000, () => {})
        