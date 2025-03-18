
const express = require('express')
import {handler3675} from "./handler3675";
const app = express()
app.get('/3675', handler3675)
app.listen(3000, () => {})
        