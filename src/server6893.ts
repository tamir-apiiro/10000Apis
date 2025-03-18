
const express = require('express')
import {handler6893} from "./handler6893";
const app = express()
app.get('/6893', handler6893)
app.listen(3000, () => {})
        