
const express = require('express')
import {handler3140} from "./handler3140";
const app = express()
app.get('/3140', handler3140)
app.listen(3000, () => {})
        