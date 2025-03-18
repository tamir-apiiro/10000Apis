
const express = require('express')
import {handler2844} from "./handler2844";
const app = express()
app.get('/2844', handler2844)
app.listen(3000, () => {})
        