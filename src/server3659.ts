
const express = require('express')
import {handler3659} from "./handler3659";
const app = express()
app.get('/3659', handler3659)
app.listen(3000, () => {})
        