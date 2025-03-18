
const express = require('express')
import {handler6411} from "./handler6411";
const app = express()
app.get('/6411', handler6411)
app.listen(3000, () => {})
        