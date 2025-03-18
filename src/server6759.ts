
const express = require('express')
import {handler6759} from "./handler6759";
const app = express()
app.get('/6759', handler6759)
app.listen(3000, () => {})
        