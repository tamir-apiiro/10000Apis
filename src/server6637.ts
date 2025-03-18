
const express = require('express')
import {handler6637} from "./handler6637";
const app = express()
app.get('/6637', handler6637)
app.listen(3000, () => {})
        