
const express = require('express')
import {handler3532} from "./handler3532";
const app = express()
app.get('/3532', handler3532)
app.listen(3000, () => {})
        