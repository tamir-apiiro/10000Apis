
const express = require('express')
import {handler6191} from "./handler6191";
const app = express()
app.get('/6191', handler6191)
app.listen(3000, () => {})
        