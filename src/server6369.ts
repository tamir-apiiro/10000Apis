
const express = require('express')
import {handler6369} from "./handler6369";
const app = express()
app.get('/6369', handler6369)
app.listen(3000, () => {})
        