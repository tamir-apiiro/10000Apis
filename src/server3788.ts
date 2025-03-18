
const express = require('express')
import {handler3788} from "./handler3788";
const app = express()
app.get('/3788', handler3788)
app.listen(3000, () => {})
        