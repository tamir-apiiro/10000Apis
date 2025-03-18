
const express = require('express')
import {handler6375} from "./handler6375";
const app = express()
app.get('/6375', handler6375)
app.listen(3000, () => {})
        