
const express = require('express')
import {handler6798} from "./handler6798";
const app = express()
app.get('/6798', handler6798)
app.listen(3000, () => {})
        