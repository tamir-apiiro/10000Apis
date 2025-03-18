
const express = require('express')
import {handler6841} from "./handler6841";
const app = express()
app.get('/6841', handler6841)
app.listen(3000, () => {})
        