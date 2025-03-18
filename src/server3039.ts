
const express = require('express')
import {handler3039} from "./handler3039";
const app = express()
app.get('/3039', handler3039)
app.listen(3000, () => {})
        