
const express = require('express')
import {handler6392} from "./handler6392";
const app = express()
app.get('/6392', handler6392)
app.listen(3000, () => {})
        