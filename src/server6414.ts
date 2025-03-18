
const express = require('express')
import {handler6414} from "./handler6414";
const app = express()
app.get('/6414', handler6414)
app.listen(3000, () => {})
        