
const express = require('express')
import {handler6289} from "./handler6289";
const app = express()
app.get('/6289', handler6289)
app.listen(3000, () => {})
        