
const express = require('express')
import {handler6393} from "./handler6393";
const app = express()
app.get('/6393', handler6393)
app.listen(3000, () => {})
        