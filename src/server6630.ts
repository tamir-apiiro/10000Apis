
const express = require('express')
import {handler6630} from "./handler6630";
const app = express()
app.get('/6630', handler6630)
app.listen(3000, () => {})
        