
const express = require('express')
import {handler4189} from "./handler4189";
const app = express()
app.get('/4189', handler4189)
app.listen(3000, () => {})
        