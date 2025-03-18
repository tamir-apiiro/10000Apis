
const express = require('express')
import {handler6710} from "./handler6710";
const app = express()
app.get('/6710', handler6710)
app.listen(3000, () => {})
        