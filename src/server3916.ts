
const express = require('express')
import {handler3916} from "./handler3916";
const app = express()
app.get('/3916', handler3916)
app.listen(3000, () => {})
        