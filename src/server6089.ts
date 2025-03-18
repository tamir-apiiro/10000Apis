
const express = require('express')
import {handler6089} from "./handler6089";
const app = express()
app.get('/6089', handler6089)
app.listen(3000, () => {})
        