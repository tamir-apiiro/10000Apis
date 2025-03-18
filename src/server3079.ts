
const express = require('express')
import {handler3079} from "./handler3079";
const app = express()
app.get('/3079', handler3079)
app.listen(3000, () => {})
        