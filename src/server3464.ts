
const express = require('express')
import {handler3464} from "./handler3464";
const app = express()
app.get('/3464', handler3464)
app.listen(3000, () => {})
        