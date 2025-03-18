
const express = require('express')
import {handler6130} from "./handler6130";
const app = express()
app.get('/6130', handler6130)
app.listen(3000, () => {})
        