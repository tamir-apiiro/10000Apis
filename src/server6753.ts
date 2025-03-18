
const express = require('express')
import {handler6753} from "./handler6753";
const app = express()
app.get('/6753', handler6753)
app.listen(3000, () => {})
        