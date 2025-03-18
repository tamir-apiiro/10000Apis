
const express = require('express')
import {handler6832} from "./handler6832";
const app = express()
app.get('/6832', handler6832)
app.listen(3000, () => {})
        