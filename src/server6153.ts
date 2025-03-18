
const express = require('express')
import {handler6153} from "./handler6153";
const app = express()
app.get('/6153', handler6153)
app.listen(3000, () => {})
        