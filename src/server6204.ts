
const express = require('express')
import {handler6204} from "./handler6204";
const app = express()
app.get('/6204', handler6204)
app.listen(3000, () => {})
        