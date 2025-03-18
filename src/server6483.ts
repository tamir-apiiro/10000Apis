
const express = require('express')
import {handler6483} from "./handler6483";
const app = express()
app.get('/6483', handler6483)
app.listen(3000, () => {})
        