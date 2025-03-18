
const express = require('express')
import {handler3447} from "./handler3447";
const app = express()
app.get('/3447', handler3447)
app.listen(3000, () => {})
        