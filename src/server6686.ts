
const express = require('express')
import {handler6686} from "./handler6686";
const app = express()
app.get('/6686', handler6686)
app.listen(3000, () => {})
        