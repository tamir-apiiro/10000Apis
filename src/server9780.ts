
const express = require('express')
import {handler9780} from "./handler9780";
const app = express()
app.get('/9780', handler9780)
app.listen(3000, () => {})
        