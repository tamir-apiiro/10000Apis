
const express = require('express')
import {handler6180} from "./handler6180";
const app = express()
app.get('/6180', handler6180)
app.listen(3000, () => {})
        