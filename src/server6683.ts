
const express = require('express')
import {handler6683} from "./handler6683";
const app = express()
app.get('/6683', handler6683)
app.listen(3000, () => {})
        