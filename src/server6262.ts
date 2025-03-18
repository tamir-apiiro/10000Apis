
const express = require('express')
import {handler6262} from "./handler6262";
const app = express()
app.get('/6262', handler6262)
app.listen(3000, () => {})
        