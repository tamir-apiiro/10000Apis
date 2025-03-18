
const express = require('express')
import {handler6553} from "./handler6553";
const app = express()
app.get('/6553', handler6553)
app.listen(3000, () => {})
        