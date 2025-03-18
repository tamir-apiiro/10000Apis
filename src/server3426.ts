
const express = require('express')
import {handler3426} from "./handler3426";
const app = express()
app.get('/3426', handler3426)
app.listen(3000, () => {})
        