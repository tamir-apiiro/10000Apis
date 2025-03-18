
const express = require('express')
import {handler6999} from "./handler6999";
const app = express()
app.get('/6999', handler6999)
app.listen(3000, () => {})
        