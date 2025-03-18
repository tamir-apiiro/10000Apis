
const express = require('express')
import {handler3215} from "./handler3215";
const app = express()
app.get('/3215', handler3215)
app.listen(3000, () => {})
        