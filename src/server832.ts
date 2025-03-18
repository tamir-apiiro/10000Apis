
const express = require('express')
import {handler832} from "./handler832";
const app = express()
app.get('/832', handler832)
app.listen(3000, () => {})
        