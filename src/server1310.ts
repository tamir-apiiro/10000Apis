
const express = require('express')
import {handler1310} from "./handler1310";
const app = express()
app.get('/1310', handler1310)
app.listen(3000, () => {})
        