
const express = require('express')
import {handler6261} from "./handler6261";
const app = express()
app.get('/6261', handler6261)
app.listen(3000, () => {})
        