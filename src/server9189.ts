
const express = require('express')
import {handler9189} from "./handler9189";
const app = express()
app.get('/9189', handler9189)
app.listen(3000, () => {})
        