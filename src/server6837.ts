
const express = require('express')
import {handler6837} from "./handler6837";
const app = express()
app.get('/6837', handler6837)
app.listen(3000, () => {})
        