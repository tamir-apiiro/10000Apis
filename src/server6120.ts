
const express = require('express')
import {handler6120} from "./handler6120";
const app = express()
app.get('/6120', handler6120)
app.listen(3000, () => {})
        