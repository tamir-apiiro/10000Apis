
const express = require('express')
import {handler6920} from "./handler6920";
const app = express()
app.get('/6920', handler6920)
app.listen(3000, () => {})
        