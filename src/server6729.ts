
const express = require('express')
import {handler6729} from "./handler6729";
const app = express()
app.get('/6729', handler6729)
app.listen(3000, () => {})
        