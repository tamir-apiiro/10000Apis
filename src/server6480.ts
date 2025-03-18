
const express = require('express')
import {handler6480} from "./handler6480";
const app = express()
app.get('/6480', handler6480)
app.listen(3000, () => {})
        