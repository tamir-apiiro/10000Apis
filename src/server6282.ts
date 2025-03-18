
const express = require('express')
import {handler6282} from "./handler6282";
const app = express()
app.get('/6282', handler6282)
app.listen(3000, () => {})
        