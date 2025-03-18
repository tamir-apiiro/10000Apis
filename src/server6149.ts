
const express = require('express')
import {handler6149} from "./handler6149";
const app = express()
app.get('/6149', handler6149)
app.listen(3000, () => {})
        