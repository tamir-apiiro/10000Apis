
const express = require('express')
import {handler6915} from "./handler6915";
const app = express()
app.get('/6915', handler6915)
app.listen(3000, () => {})
        