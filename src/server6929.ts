
const express = require('express')
import {handler6929} from "./handler6929";
const app = express()
app.get('/6929', handler6929)
app.listen(3000, () => {})
        