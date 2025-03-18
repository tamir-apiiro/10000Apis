
const express = require('express')
import {handler6576} from "./handler6576";
const app = express()
app.get('/6576', handler6576)
app.listen(3000, () => {})
        