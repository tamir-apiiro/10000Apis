
const express = require('express')
import {handler6546} from "./handler6546";
const app = express()
app.get('/6546', handler6546)
app.listen(3000, () => {})
        