
const express = require('express')
import {handler6209} from "./handler6209";
const app = express()
app.get('/6209', handler6209)
app.listen(3000, () => {})
        