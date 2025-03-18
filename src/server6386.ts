
const express = require('express')
import {handler6386} from "./handler6386";
const app = express()
app.get('/6386', handler6386)
app.listen(3000, () => {})
        