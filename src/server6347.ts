
const express = require('express')
import {handler6347} from "./handler6347";
const app = express()
app.get('/6347', handler6347)
app.listen(3000, () => {})
        