
const express = require('express')
import {handler6192} from "./handler6192";
const app = express()
app.get('/6192', handler6192)
app.listen(3000, () => {})
        