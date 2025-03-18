
const express = require('express')
import {handler6602} from "./handler6602";
const app = express()
app.get('/6602', handler6602)
app.listen(3000, () => {})
        