
const express = require('express')
import {handler6448} from "./handler6448";
const app = express()
app.get('/6448', handler6448)
app.listen(3000, () => {})
        