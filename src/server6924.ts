
const express = require('express')
import {handler6924} from "./handler6924";
const app = express()
app.get('/6924', handler6924)
app.listen(3000, () => {})
        