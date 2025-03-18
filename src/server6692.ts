
const express = require('express')
import {handler6692} from "./handler6692";
const app = express()
app.get('/6692', handler6692)
app.listen(3000, () => {})
        