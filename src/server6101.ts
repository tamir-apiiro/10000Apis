
const express = require('express')
import {handler6101} from "./handler6101";
const app = express()
app.get('/6101', handler6101)
app.listen(3000, () => {})
        