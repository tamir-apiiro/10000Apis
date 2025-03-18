
const express = require('express')
import {handler6532} from "./handler6532";
const app = express()
app.get('/6532', handler6532)
app.listen(3000, () => {})
        