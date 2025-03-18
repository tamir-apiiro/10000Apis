
const express = require('express')
import {handler6780} from "./handler6780";
const app = express()
app.get('/6780', handler6780)
app.listen(3000, () => {})
        