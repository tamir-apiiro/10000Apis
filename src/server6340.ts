
const express = require('express')
import {handler6340} from "./handler6340";
const app = express()
app.get('/6340', handler6340)
app.listen(3000, () => {})
        