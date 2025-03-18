
const express = require('express')
import {handler6464} from "./handler6464";
const app = express()
app.get('/6464', handler6464)
app.listen(3000, () => {})
        