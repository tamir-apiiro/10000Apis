
const express = require('express')
import {handler6507} from "./handler6507";
const app = express()
app.get('/6507', handler6507)
app.listen(3000, () => {})
        