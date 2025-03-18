
const express = require('express')
import {handler3991} from "./handler3991";
const app = express()
app.get('/3991', handler3991)
app.listen(3000, () => {})
        