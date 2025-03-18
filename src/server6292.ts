
const express = require('express')
import {handler6292} from "./handler6292";
const app = express()
app.get('/6292', handler6292)
app.listen(3000, () => {})
        