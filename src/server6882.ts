
const express = require('express')
import {handler6882} from "./handler6882";
const app = express()
app.get('/6882', handler6882)
app.listen(3000, () => {})
        