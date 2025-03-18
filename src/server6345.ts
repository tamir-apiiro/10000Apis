
const express = require('express')
import {handler6345} from "./handler6345";
const app = express()
app.get('/6345', handler6345)
app.listen(3000, () => {})
        