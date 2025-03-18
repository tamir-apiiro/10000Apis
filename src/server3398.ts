
const express = require('express')
import {handler3398} from "./handler3398";
const app = express()
app.get('/3398', handler3398)
app.listen(3000, () => {})
        