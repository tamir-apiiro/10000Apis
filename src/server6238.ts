
const express = require('express')
import {handler6238} from "./handler6238";
const app = express()
app.get('/6238', handler6238)
app.listen(3000, () => {})
        