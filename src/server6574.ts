
const express = require('express')
import {handler6574} from "./handler6574";
const app = express()
app.get('/6574', handler6574)
app.listen(3000, () => {})
        