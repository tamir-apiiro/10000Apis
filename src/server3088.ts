
const express = require('express')
import {handler3088} from "./handler3088";
const app = express()
app.get('/3088', handler3088)
app.listen(3000, () => {})
        