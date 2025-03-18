
const express = require('express')
import {handler6044} from "./handler6044";
const app = express()
app.get('/6044', handler6044)
app.listen(3000, () => {})
        