
const express = require('express')
import {handler3616} from "./handler3616";
const app = express()
app.get('/3616', handler3616)
app.listen(3000, () => {})
        