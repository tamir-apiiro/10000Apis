
const express = require('express')
import {handler6517} from "./handler6517";
const app = express()
app.get('/6517', handler6517)
app.listen(3000, () => {})
        