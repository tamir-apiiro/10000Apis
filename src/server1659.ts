
const express = require('express')
import {handler1659} from "./handler1659";
const app = express()
app.get('/1659', handler1659)
app.listen(3000, () => {})
        