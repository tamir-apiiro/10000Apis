
const express = require('express')
import {handler6834} from "./handler6834";
const app = express()
app.get('/6834', handler6834)
app.listen(3000, () => {})
        