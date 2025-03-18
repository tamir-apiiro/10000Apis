
const express = require('express')
import {handler6647} from "./handler6647";
const app = express()
app.get('/6647', handler6647)
app.listen(3000, () => {})
        