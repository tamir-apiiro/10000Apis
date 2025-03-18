
const express = require('express')
import {handler6715} from "./handler6715";
const app = express()
app.get('/6715', handler6715)
app.listen(3000, () => {})
        