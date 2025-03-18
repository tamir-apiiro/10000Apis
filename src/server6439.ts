
const express = require('express')
import {handler6439} from "./handler6439";
const app = express()
app.get('/6439', handler6439)
app.listen(3000, () => {})
        