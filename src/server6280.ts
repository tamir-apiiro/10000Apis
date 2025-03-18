
const express = require('express')
import {handler6280} from "./handler6280";
const app = express()
app.get('/6280', handler6280)
app.listen(3000, () => {})
        