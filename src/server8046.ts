
const express = require('express')
import {handler8046} from "./handler8046";
const app = express()
app.get('/8046', handler8046)
app.listen(3000, () => {})
        