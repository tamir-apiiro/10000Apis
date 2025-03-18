
const express = require('express')
import {handler6275} from "./handler6275";
const app = express()
app.get('/6275', handler6275)
app.listen(3000, () => {})
        