
const express = require('express')
import {handler6945} from "./handler6945";
const app = express()
app.get('/6945', handler6945)
app.listen(3000, () => {})
        