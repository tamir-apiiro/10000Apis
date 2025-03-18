
const express = require('express')
import {handler6234} from "./handler6234";
const app = express()
app.get('/6234', handler6234)
app.listen(3000, () => {})
        