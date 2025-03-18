
const express = require('express')
import {handler3127} from "./handler3127";
const app = express()
app.get('/3127', handler3127)
app.listen(3000, () => {})
        