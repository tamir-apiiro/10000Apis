
const express = require('express')
import {handler6601} from "./handler6601";
const app = express()
app.get('/6601', handler6601)
app.listen(3000, () => {})
        