
const express = require('express')
import {handler6251} from "./handler6251";
const app = express()
app.get('/6251', handler6251)
app.listen(3000, () => {})
        