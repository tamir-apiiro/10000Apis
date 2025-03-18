
const express = require('express')
import {handler6814} from "./handler6814";
const app = express()
app.get('/6814', handler6814)
app.listen(3000, () => {})
        