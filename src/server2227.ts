
const express = require('express')
import {handler2227} from "./handler2227";
const app = express()
app.get('/2227', handler2227)
app.listen(3000, () => {})
        