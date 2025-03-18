
const express = require('express')
import {handler6173} from "./handler6173";
const app = express()
app.get('/6173', handler6173)
app.listen(3000, () => {})
        