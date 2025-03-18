
const express = require('express')
import {handler2046} from "./handler2046";
const app = express()
app.get('/2046', handler2046)
app.listen(3000, () => {})
        