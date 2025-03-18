
const express = require('express')
import {handler6585} from "./handler6585";
const app = express()
app.get('/6585', handler6585)
app.listen(3000, () => {})
        