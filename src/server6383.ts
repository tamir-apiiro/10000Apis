
const express = require('express')
import {handler6383} from "./handler6383";
const app = express()
app.get('/6383', handler6383)
app.listen(3000, () => {})
        