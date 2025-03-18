
const express = require('express')
import {handler6765} from "./handler6765";
const app = express()
app.get('/6765', handler6765)
app.listen(3000, () => {})
        