
const express = require('express')
import {handler6660} from "./handler6660";
const app = express()
app.get('/6660', handler6660)
app.listen(3000, () => {})
        