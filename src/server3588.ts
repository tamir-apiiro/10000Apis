
const express = require('express')
import {handler3588} from "./handler3588";
const app = express()
app.get('/3588', handler3588)
app.listen(3000, () => {})
        