
const express = require('express')
import {handler7189} from "./handler7189";
const app = express()
app.get('/7189', handler7189)
app.listen(3000, () => {})
        