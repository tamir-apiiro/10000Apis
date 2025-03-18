
const express = require('express')
import {handler3056} from "./handler3056";
const app = express()
app.get('/3056', handler3056)
app.listen(3000, () => {})
        