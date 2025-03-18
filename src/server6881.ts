
const express = require('express')
import {handler6881} from "./handler6881";
const app = express()
app.get('/6881', handler6881)
app.listen(3000, () => {})
        