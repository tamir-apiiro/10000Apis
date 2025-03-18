
const express = require('express')
import {handler6479} from "./handler6479";
const app = express()
app.get('/6479', handler6479)
app.listen(3000, () => {})
        