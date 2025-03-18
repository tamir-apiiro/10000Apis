
const express = require('express')
import {handler4309} from "./handler4309";
const app = express()
app.get('/4309', handler4309)
app.listen(3000, () => {})
        