
const express = require('express')
import {handler6835} from "./handler6835";
const app = express()
app.get('/6835', handler6835)
app.listen(3000, () => {})
        