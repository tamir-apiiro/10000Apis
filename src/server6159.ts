
const express = require('express')
import {handler6159} from "./handler6159";
const app = express()
app.get('/6159', handler6159)
app.listen(3000, () => {})
        