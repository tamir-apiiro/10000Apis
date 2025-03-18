
const express = require('express')
import {handler6134} from "./handler6134";
const app = express()
app.get('/6134', handler6134)
app.listen(3000, () => {})
        