
const express = require('express')
import {handler3841} from "./handler3841";
const app = express()
app.get('/3841', handler3841)
app.listen(3000, () => {})
        