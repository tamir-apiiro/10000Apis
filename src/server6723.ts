
const express = require('express')
import {handler6723} from "./handler6723";
const app = express()
app.get('/6723', handler6723)
app.listen(3000, () => {})
        