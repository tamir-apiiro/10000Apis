
const express = require('express')
import {handler6409} from "./handler6409";
const app = express()
app.get('/6409', handler6409)
app.listen(3000, () => {})
        