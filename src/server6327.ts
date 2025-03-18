
const express = require('express')
import {handler6327} from "./handler6327";
const app = express()
app.get('/6327', handler6327)
app.listen(3000, () => {})
        