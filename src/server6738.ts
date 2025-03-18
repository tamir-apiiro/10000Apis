
const express = require('express')
import {handler6738} from "./handler6738";
const app = express()
app.get('/6738', handler6738)
app.listen(3000, () => {})
        