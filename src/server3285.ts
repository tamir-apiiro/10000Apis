
const express = require('express')
import {handler3285} from "./handler3285";
const app = express()
app.get('/3285', handler3285)
app.listen(3000, () => {})
        