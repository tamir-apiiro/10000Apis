
const express = require('express')
import {handler3046} from "./handler3046";
const app = express()
app.get('/3046', handler3046)
app.listen(3000, () => {})
        