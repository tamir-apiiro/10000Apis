
const express = require('express')
import {handler6778} from "./handler6778";
const app = express()
app.get('/6778', handler6778)
app.listen(3000, () => {})
        