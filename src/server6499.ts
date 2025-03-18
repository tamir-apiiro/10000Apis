
const express = require('express')
import {handler6499} from "./handler6499";
const app = express()
app.get('/6499', handler6499)
app.listen(3000, () => {})
        