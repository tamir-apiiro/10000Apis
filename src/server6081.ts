
const express = require('express')
import {handler6081} from "./handler6081";
const app = express()
app.get('/6081', handler6081)
app.listen(3000, () => {})
        