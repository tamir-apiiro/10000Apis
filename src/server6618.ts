
const express = require('express')
import {handler6618} from "./handler6618";
const app = express()
app.get('/6618', handler6618)
app.listen(3000, () => {})
        