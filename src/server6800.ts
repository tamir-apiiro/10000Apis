
const express = require('express')
import {handler6800} from "./handler6800";
const app = express()
app.get('/6800', handler6800)
app.listen(3000, () => {})
        