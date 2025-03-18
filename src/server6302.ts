
const express = require('express')
import {handler6302} from "./handler6302";
const app = express()
app.get('/6302', handler6302)
app.listen(3000, () => {})
        