
const express = require('express')
import {handler6128} from "./handler6128";
const app = express()
app.get('/6128', handler6128)
app.listen(3000, () => {})
        