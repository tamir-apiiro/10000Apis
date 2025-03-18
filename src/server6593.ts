
const express = require('express')
import {handler6593} from "./handler6593";
const app = express()
app.get('/6593', handler6593)
app.listen(3000, () => {})
        