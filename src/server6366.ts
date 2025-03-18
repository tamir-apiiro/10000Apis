
const express = require('express')
import {handler6366} from "./handler6366";
const app = express()
app.get('/6366', handler6366)
app.listen(3000, () => {})
        