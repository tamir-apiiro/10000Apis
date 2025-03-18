
const express = require('express')
import {handler6953} from "./handler6953";
const app = express()
app.get('/6953', handler6953)
app.listen(3000, () => {})
        