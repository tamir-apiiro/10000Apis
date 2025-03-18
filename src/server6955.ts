
const express = require('express')
import {handler6955} from "./handler6955";
const app = express()
app.get('/6955', handler6955)
app.listen(3000, () => {})
        