
const express = require('express')
import {handler6377} from "./handler6377";
const app = express()
app.get('/6377', handler6377)
app.listen(3000, () => {})
        