
const express = require('express')
import {handler6509} from "./handler6509";
const app = express()
app.get('/6509', handler6509)
app.listen(3000, () => {})
        