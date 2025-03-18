
const express = require('express')
import {handler6429} from "./handler6429";
const app = express()
app.get('/6429', handler6429)
app.listen(3000, () => {})
        