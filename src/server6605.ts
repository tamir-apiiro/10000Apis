
const express = require('express')
import {handler6605} from "./handler6605";
const app = express()
app.get('/6605', handler6605)
app.listen(3000, () => {})
        