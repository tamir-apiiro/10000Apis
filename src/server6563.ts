
const express = require('express')
import {handler6563} from "./handler6563";
const app = express()
app.get('/6563', handler6563)
app.listen(3000, () => {})
        