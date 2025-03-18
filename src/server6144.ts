
const express = require('express')
import {handler6144} from "./handler6144";
const app = express()
app.get('/6144', handler6144)
app.listen(3000, () => {})
        