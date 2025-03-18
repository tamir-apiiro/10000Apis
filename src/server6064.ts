
const express = require('express')
import {handler6064} from "./handler6064";
const app = express()
app.get('/6064', handler6064)
app.listen(3000, () => {})
        