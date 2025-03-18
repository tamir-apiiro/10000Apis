
const express = require('express')
import {handler3162} from "./handler3162";
const app = express()
app.get('/3162', handler3162)
app.listen(3000, () => {})
        