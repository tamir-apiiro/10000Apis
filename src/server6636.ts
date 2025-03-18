
const express = require('express')
import {handler6636} from "./handler6636";
const app = express()
app.get('/6636', handler6636)
app.listen(3000, () => {})
        