
const express = require('express')
import {handler5046} from "./handler5046";
const app = express()
app.get('/5046', handler5046)
app.listen(3000, () => {})
        