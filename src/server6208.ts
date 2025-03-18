
const express = require('express')
import {handler6208} from "./handler6208";
const app = express()
app.get('/6208', handler6208)
app.listen(3000, () => {})
        