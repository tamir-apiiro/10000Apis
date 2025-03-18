
const express = require('express')
import {handler6742} from "./handler6742";
const app = express()
app.get('/6742', handler6742)
app.listen(3000, () => {})
        