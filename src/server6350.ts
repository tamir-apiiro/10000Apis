
const express = require('express')
import {handler6350} from "./handler6350";
const app = express()
app.get('/6350', handler6350)
app.listen(3000, () => {})
        