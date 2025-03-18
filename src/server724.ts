
const express = require('express')
import {handler724} from "./handler724";
const app = express()
app.get('/724', handler724)
app.listen(3000, () => {})
        