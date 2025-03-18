
const express = require('express')
import {handler3822} from "./handler3822";
const app = express()
app.get('/3822', handler3822)
app.listen(3000, () => {})
        