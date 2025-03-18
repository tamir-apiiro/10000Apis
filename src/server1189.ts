
const express = require('express')
import {handler1189} from "./handler1189";
const app = express()
app.get('/1189', handler1189)
app.listen(3000, () => {})
        