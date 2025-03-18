
const express = require('express')
import {handler6273} from "./handler6273";
const app = express()
app.get('/6273', handler6273)
app.listen(3000, () => {})
        