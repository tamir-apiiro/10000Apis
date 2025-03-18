
const express = require('express')
import {handler689} from "./handler689";
const app = express()
app.get('/689', handler689)
app.listen(3000, () => {})
        