
const express = require('express')
import {handler6305} from "./handler6305";
const app = express()
app.get('/6305', handler6305)
app.listen(3000, () => {})
        