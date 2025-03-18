
const express = require('express')
import {handler3938} from "./handler3938";
const app = express()
app.get('/3938', handler3938)
app.listen(3000, () => {})
        