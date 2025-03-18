
const express = require('express')
import {handler3034} from "./handler3034";
const app = express()
app.get('/3034', handler3034)
app.listen(3000, () => {})
        