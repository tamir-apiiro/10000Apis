
const express = require('express')
import {handler3218} from "./handler3218";
const app = express()
app.get('/3218', handler3218)
app.listen(3000, () => {})
        