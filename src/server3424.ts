
const express = require('express')
import {handler3424} from "./handler3424";
const app = express()
app.get('/3424', handler3424)
app.listen(3000, () => {})
        