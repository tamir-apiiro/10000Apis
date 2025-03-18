
const express = require('express')
import {handler6746} from "./handler6746";
const app = express()
app.get('/6746', handler6746)
app.listen(3000, () => {})
        