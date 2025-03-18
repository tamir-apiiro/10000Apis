
const express = require('express')
import {handler3692} from "./handler3692";
const app = express()
app.get('/3692', handler3692)
app.listen(3000, () => {})
        