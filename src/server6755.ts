
const express = require('express')
import {handler6755} from "./handler6755";
const app = express()
app.get('/6755', handler6755)
app.listen(3000, () => {})
        