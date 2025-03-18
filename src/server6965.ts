
const express = require('express')
import {handler6965} from "./handler6965";
const app = express()
app.get('/6965', handler6965)
app.listen(3000, () => {})
        