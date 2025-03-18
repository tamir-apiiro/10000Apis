
const express = require('express')
import {handler6720} from "./handler6720";
const app = express()
app.get('/6720', handler6720)
app.listen(3000, () => {})
        