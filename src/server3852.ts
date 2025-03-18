
const express = require('express')
import {handler3852} from "./handler3852";
const app = express()
app.get('/3852', handler3852)
app.listen(3000, () => {})
        