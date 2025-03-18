
const express = require('express')
import {handler6116} from "./handler6116";
const app = express()
app.get('/6116', handler6116)
app.listen(3000, () => {})
        