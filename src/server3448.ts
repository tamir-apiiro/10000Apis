
const express = require('express')
import {handler3448} from "./handler3448";
const app = express()
app.get('/3448', handler3448)
app.listen(3000, () => {})
        