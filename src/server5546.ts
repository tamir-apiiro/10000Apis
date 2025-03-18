
const express = require('express')
import {handler5546} from "./handler5546";
const app = express()
app.get('/5546', handler5546)
app.listen(3000, () => {})
        