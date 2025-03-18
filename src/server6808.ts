
const express = require('express')
import {handler6808} from "./handler6808";
const app = express()
app.get('/6808', handler6808)
app.listen(3000, () => {})
        