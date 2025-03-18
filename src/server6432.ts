
const express = require('express')
import {handler6432} from "./handler6432";
const app = express()
app.get('/6432', handler6432)
app.listen(3000, () => {})
        