
const express = require('express')
import {handler6899} from "./handler6899";
const app = express()
app.get('/6899', handler6899)
app.listen(3000, () => {})
        