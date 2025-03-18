
const express = require('express')
import {handler7046} from "./handler7046";
const app = express()
app.get('/7046', handler7046)
app.listen(3000, () => {})
        