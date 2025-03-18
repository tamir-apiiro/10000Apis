
const express = require('express')
import {handler6024} from "./handler6024";
const app = express()
app.get('/6024', handler6024)
app.listen(3000, () => {})
        