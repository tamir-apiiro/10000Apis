
const express = require('express')
import {handler6046} from "./handler6046";
const app = express()
app.get('/6046', handler6046)
app.listen(3000, () => {})
        